import { SinglyLinked, DoublyLinked } from './Linked.d';

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