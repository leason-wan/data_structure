interface State {
  [index: number]: any
  length: number
}

interface ArrayApis {
  [key: string]: Function
  get: (index: number) => any
  set: (index: number, value: any) => void
  insert: (index: number, value: any) => void
  del: (index: number) => void
  toString: () => string
}

// Base Array
export default function Array(length: number): ArrayApis {
  let state: State = {
    length: length,
  }
  for(let i = 0; i < length; i++) {
    state[i] = undefined;
  }
  return bindMethod(state);
}

function bindMethod(state: State) {
  const get = (index: number) => {
    return state[index];
  }
  const set = (index: number, value: any) => {
    state[index] = value;
  }
  const insert = (index: number, value: any) => {
    for(let i = state.length; i >= index; i--) {
      state[i] = state[i-1];
    }
    state[index] = value;
  }
  const del = (index: number) => {
    for(let i = index; i < state.length - 1; i++) {
      state[i] = state[i+1]
    }
    state[state.length] = undefined;
  }
  const toString = () => {
    let str = '';
    const strStart = `[ `;
    const strEnd = `${state[state.length - 1]} ]`;
    str += strStart;
    for (let i = 0; i < state.length - 1; i++) {
      str += state[i] + ', ';
    }
    str += strEnd;
    return str;
  }
  
  const apis: ArrayApis = {
    get,
    set,
    insert,
    del,
    toString,
  }

  withCheck(apis, state);

  return {
    ...apis
  }
}

function withCheck(apis: ArrayApis, state: State) {
  const checkOverflow = (index: number) => {
    if (index < 0 || index > state.length - 1) {
      throw new Error(`operate ${index} of array is overflow the memory, required valid index`);
    }
  }

  let key: any;
  for(key in apis) {
    let method = apis[key];
    apis[key] = (index: number, ...args: any): void | string => {
      checkOverflow(index);
      return method(index, args.toString());
    }
  }
}