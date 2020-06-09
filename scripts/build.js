const path = require("path");
const fs = require("fs-extra");
const execa = require("execa");
const chalk = require("chalk");
const { targets: allTargets } = require("./utils");

buildAll(allTargets);

async function buildAll(targets) {
  for (const target of targets) {
    await build(target);
  }
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`);

  await fs.remove(`${pkgDir}/dist`);

  const environment = [
    `NODE_ENV:production`,
    `TARGET:${target}`,
    // formats ? `FORMATS:${formats}` : ``,
    // `FORMATS:cjs`,
    // sourceMap ? `SOURCE_MAP:true` : ``
  ]
    .filter(Boolean)
    .join(",");

  await execa("rollup", ["-c", "--environment", environment], {
    stdio: "inherit",
  });

  // build types
  const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor')

  const extractorConfigPath = path.resolve(pkgDir, `api-extractor.json`)
  const extractorConfig = ExtractorConfig.loadFileAndPrepare(
    extractorConfigPath
  )
  const extractorResult = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true
  })

  if (extractorResult.succeeded) {
    // concat additional d.ts to rolled-up dts
    const typesDir = path.resolve(pkgDir, 'types')
    if (await fs.exists(typesDir)) {
      const dtsPath = path.resolve(pkgDir, pkg.types)
      const existing = await fs.readFile(dtsPath, 'utf-8')
      const typeFiles = await fs.readdir(typesDir)
      const toAdd = await Promise.all(
        typeFiles.map(file => {
          return fs.readFile(path.resolve(typesDir, file), 'utf-8')
        })
      )
      await fs.writeFile(dtsPath, existing + '\n' + toAdd.join('\n'))
    }
    console.log(
      chalk.bold(chalk.green(`API Extractor completed successfully.`))
    )
  } else {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors` +
        ` and ${extractorResult.warningCount} warnings`
    )
    process.exitCode = 1
  }
  
  await fs.remove(`${pkgDir}/dist/packages`)
}
