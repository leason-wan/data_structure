export interface SinglyLinked {
  value: any
  next: SinglyLinked | null
}

export interface DoublyLinked {
  value: any
  prev: DoublyLinked | null
  next: DoublyLinked | null
}