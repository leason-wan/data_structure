import { State } from './Array.d';

// Base Array
export function Array(length: number) {
  let state: State = {
    length: length,
  }
  for(let i = 0; i < length; i++) {
    state[i] = undefined;
  }
  const checkOverflow = (index: number) => {
    if (index < 0 || index > state.length - 1) {
      throw new Error('overflow the memory');
    }
  }
  const _get = (index: number) => {
    checkOverflow(index);
    return state[index];
  }
  const _set = (index: number, value: any) => {
    checkOverflow(index);
    state[index] = value;
  }
  return {
    state: state,
    get: _get,
    set: _set,
  }
}
