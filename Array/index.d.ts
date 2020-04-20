export interface State {
  [index: number]: any
  length: number
  maxLength: number
}

export interface TempState {
  [index: number]: any
  length: number
}

export interface StateWrapper {
  state: State
}

export interface ArrayType {
  state: State
  stateWrapper?: StateWrapper
  get: (index: number) => any
  set: (index: number, value: any) => void
  push: (value: any) => void
  insert: (index: number, value: any) => void
  del: (index: number) => void
  concat: (array: ArrayType) => void
}