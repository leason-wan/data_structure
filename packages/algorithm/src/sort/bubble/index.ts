function swap(data: number[], i: number, j: number) {
  let temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

export function sort(data: number[]) {
  if (data.length < 2) return;

  let bubbleLength = data.length;
  let hasSwap = true;

  while(bubbleLength && hasSwap) {
    let swaped = false;

    for(let j = 0; j < bubbleLength; j++) {
      if(data[j] > data[j + 1]) {
        swap(data, j, j + 1);
        swaped = true;
      }
    }

    bubbleLength--;
    hasSwap = swaped;

  }

}
