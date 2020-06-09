const arr: number[] = [1,4,6,8,1,2];

sort(arr);
console.log(arr);

function sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i - 1, arr[i]);
  }
}

function insert(sorted: number[], max_index: number, value: number) {
  // for循环  
  // let i = max_index;
  // for(i; i >= 0; i--) {
  //   if (sorted[i] > value) {
  //     sorted[i + 1] = sorted[i];
  //   } else {
  //     break;
  //   }
  // }

  // while循环
  // sorted[i + 1] = value;
  // let p = max_index;
  // while (sorted[p] > value && p >=0) {
  //   sorted[p + 1] = sorted[p];
  //   p--;
  // }
  // sorted[p + 1] = value;

  // 尾调递归
  if (sorted[max_index] > value && max_index >= 0) {
    sorted[max_index + 1] = sorted[max_index];
    insert(sorted, max_index - 1, value);
  } else {
    sorted[max_index + 1] = value;
  }
}
