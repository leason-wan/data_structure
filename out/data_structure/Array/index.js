"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Array_1 = require("./Array");
console.log('create four index array');
var arr = Array_1.Array(4);
console.log(arr.toString());
console.log('get first item');
console.log(arr.get(0));
console.log('set first item and second item');
arr.set(0, 'first item');
arr.set(1, 'second item');
console.log(arr.toString());
console.log('insert item to second');
arr.insert(1, 'insert item');
console.log(arr.toString());
console.log('delete insert item');
arr.del(1);
console.log(arr.toString());
//# sourceMappingURL=index.js.map