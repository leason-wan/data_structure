export function sort(data: number[], start: number = 0, end: number = data.length) {
  if(end - start <= 1) return;

  const mid = Math.ceil((start + end) / 2);

  sort(data, start, mid);
  sort(data, mid, end);

  merge(data, start, mid, end);
}

function merge(data: number[], start: number, mid: number, end: number) {
  const dataOne: number[] = data.slice(start, mid);
  const dataTwo: number[] = data.slice(mid, end);

  // 添加哨兵，减少判断逻辑
  dataOne.push(Infinity);
  dataTwo.push(Infinity);

  let k = start, i = 0, j = 0;
  for(; k < end; k++) {
    data[k] = dataOne[i] < dataTwo[j] ? dataOne[i++] : dataTwo[j++];
  }

}
