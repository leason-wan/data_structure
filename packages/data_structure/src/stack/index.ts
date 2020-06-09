import { SinglyLinked } from '../linked';

export interface Stack {
  head: SinglyLinked
}

export interface StackApis {
  top(): void
  pop(): void
  push(data: any): void
  toString(): void
}

export default function Stack(): StackApis {
  const state: Stack = {
    head: SinglyLinked(null)
  }
  const top = () => state.head.value;
  const pop = (): SinglyLinked => {
    let popValue;
    if (state.head.next) {
      popValue = state.head.value;
      state.head = state.head.next;
    }
    return popValue;
  };
  const push = (data: any) => {
    const linked = SinglyLinked(data);
    linked.next = state.head;
    state.head = linked;
  };
  const toString = (): string => {
    let str = '';
    let p = state.head;
    while(p.next) {
      str = str ? `${p.value} -> ${str}` : `${p.value}`;
      p = p.next;
    }
    return str;
  }

  return {
    top,
    pop,
    push,
    toString
  }
}
