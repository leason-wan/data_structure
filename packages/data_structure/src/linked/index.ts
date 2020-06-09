export interface SinglyLinked {
  value: any
  next: SinglyLinked | null
}

export interface DoublyLinked {
  value: any
  prev: DoublyLinked | null
  next: DoublyLinked | null
}

export function SinglyLinked(value: any): SinglyLinked {
  const state: SinglyLinked = {
    value: value,
    next: null
  }
  return state;
}

export function DoublyLinked(value: any): DoublyLinked {
  const state: DoublyLinked = {
    value: value,
    prev: null,
    next: null,
  }
  return state;
}

export default {
  SinglyLinked,
  DoublyLinked
}