export interface State {
  [index: number]: any
  length: number
}

export interface ArrayType {
  state: State
  get: (index: number) => any
  set: (index: number, value: any) => void
}