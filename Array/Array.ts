import { State, TempState, ArrayType } from './Array.d';

export function Array(length: number) {
  const maxLength = length * 2;
  let state: State = {
    length: length,
    maxLength,
  }
  for(let i = 0; i < maxLength; i++) {
    state[i] = undefined;
  }
  return bindMethods(state);
}

function get(index: number, array: State): any {
  return array[index];
}

function set(array: State, index: number, value: any) {
  array[index] = value;
}

function push(array: State | TempState, value: any): State | TempState {
  const tail = array.length;
  array[tail] = value;
  return array;
}

function insert(array: State, index: number, value: any): void {
  let tempArray: TempState = {
    length: array.length - index
  };
  for(let i = index; i < array.length; i++) {
    tempArray = push(tempArray, array[i]);
  }
  array[index] = value;
  for(let i = index + 1; i < array.length + 1; i++) {
    array = push(array, array[i]) as State;
  }
}

function del(array: State, index: number): void {
  array[index] = undefined;

}

function bindMethods(state: State): ArrayType {
  const _get = (index: number): any => {
    return get(index, state);
  }
  const _set = (index: number, value: any) => {
    set(state, index, value);
  }
  const _push = (value: any): void => {
    push(state, value);
  }
  const _insert = (index: number, value: any): void => {
    insert(state, index, value);
  }
  const _del = (index: number): void => {
    del(state, index);
  }
  return {
    state: state,
    get: _get,
    set: _set,
    push: _push,
    insert: _insert,
    del: _del,
  }
}
