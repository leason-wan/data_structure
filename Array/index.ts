import { Array } from './Array';
import { ArrayType } from './Array.d';

const arr: ArrayType = Array(4);

console.log(arr.get(0));

arr.set(0, 'first item');
console.log(arr);
