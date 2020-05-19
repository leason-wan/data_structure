import { Stack } from './Stack';
import { StackApis } from './Stack.d';

const s: StackApis = Stack();
s.push(0);
s.push(1);
s.push(2);
console.log(s.top());
s.pop();
s.pop();
s.pop();
console.log(s.top());
