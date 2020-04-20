import { Array } from './Array';
import { ArrayType } from './index.d';

const arr: ArrayType = Array(4);

// console.log(arr.get(0));

// arr.set(0, 'fisrt item');
// console.log(arr);

// arr.push('new item');
// console.log(arr);

// arr.insert(1, 'insert item');
// console.log(arr);

// arr.del(1);
console.log(arr);

const arr2: ArrayType = Array(2);
arr2.set(0, 0);
arr2.set(1, 1);
arr.concat(arr2);
console.log(arr);