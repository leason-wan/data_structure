import { SinglyLinked } from "../Linked/Linked.d";

export interface Stack {
  head: SinglyLinked
}

export interface StackApis {
  top(): void
  pop(): void
  push(data: any): void
}