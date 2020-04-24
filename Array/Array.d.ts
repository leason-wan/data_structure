export interface State {
  [index: number]: any
  length: number
}

export interface ArrayApis {
  [key: string]: Function
  get: (index: number) => any
  set: (index: number, value: any) => void
  insert: (index: number, value: any) => void
  del: (index: number) => void
  toString: () => string
}

export type ArrayApi = keyof ArrayApis;
