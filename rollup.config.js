const chalk = require('chalk')
const path = require('path')

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const name = path.basename(packageDir)
const resolvePkg = p => path.resolve(packageDir, p)
const pkg = require(resolvePkg(`package.json`))
const packageOptions = pkg.buildOptions || {}

// rollup plugins
const ts = require('rollup-plugin-typescript2')
const json = require('@rollup/plugin-json')
const { terser } = require('rollup-plugin-terser')

const outputConfigs = {
  esm: {
    file: resolvePkg(`dist/${name}.esm.js`),
    format: `es`
  },
  cjs: {
    file: resolvePkg(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  global: {
    file: resolvePkg(`dist/${name}.global.js`),
    format: `iife`
  },
}

const defaultFormats = ['esm', 'cjs']
const packageFormats = packageOptions.formats || defaultFormats
const buildConfigs = packageFormats.map(format => createConfig(format, outputConfigs[format]))

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(chalk.yellow(`invalid format config: "${format}"`))
    process.exit(1)
  }

  output.externalLiveBindings = false
  output.name = name

  const tsPlugin = ts({
    check: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      // compilerOptions: {
      //   sourceMap: false,
      //   declaration: true,
        // declarationMap: shouldEmitDeclarations
      // },
      exclude: ['**/__tests__']
    }
  })

  const rollupPluginResolve = require('@rollup/plugin-node-resolve').default;
  const rollupPluginCommonjs = require('@rollup/plugin-commonjs');
  const rollupPluginBuiltins = require('rollup-plugin-node-builtins');
  const rollupPluginGlobals = require('rollup-plugin-node-globals');
  const nodePlugins =
    packageOptions.enableNonBrowserBranches && format !== 'cjs'
      ? [
          rollupPluginResolve({
            preferBuiltins: true
          }),
          rollupPluginCommonjs({
            sourceMap: false
          }),
          rollupPluginBuiltins(),
          rollupPluginGlobals()
        ]
      : []

  return {
    input: resolvePkg('src/index.ts'),
    plugins: [
      json({
        namedExports: false
      }),
      tsPlugin,
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true
        }
      }),
      ...nodePlugins,
      ...plugins
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false
    }
  }
}

module.exports = buildConfigs
