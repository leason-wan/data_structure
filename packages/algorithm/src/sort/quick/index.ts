export function sort(data: number[], start = 0, end = data.length - 1) {
  if(end - start < 1) return;

  let mid = partition(data, start, end);

  sort(data, start, mid - 1);
  sort(data, mid + 1, end);

}

function partition(data: number[], start: number, end: number) {
  const pivot = data[end];
  let i = start, j = end;

  while(i !== j) {
    data[i] > pivot ? swap(data, i, --j) : i++;
  }
  swap(data, j, end);

  return j;

}

function swap(data: number[], pOne: number, pTwo: number) {
  let temp = data[pOne];
  data[pOne] = data[pTwo];
  data[pTwo] = temp;
}
