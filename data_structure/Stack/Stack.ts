import { SinglyLinked } from '../Linked/Linked';
import { Stack, StackApis } from './Stack.d';

export function Stack(): StackApis {
  const state: Stack = {
    head: SinglyLinked(null)
  }
  const top = () => state.head.value;
  const pop = () => {
    state.head.next && (state.head = state.head.next);
  };
  const push = (data: any) => {
    const linked = SinglyLinked(data);
    linked.next = state.head;
    state.head = linked;
  };

  return {
    top,
    pop,
    push,
  }
}
