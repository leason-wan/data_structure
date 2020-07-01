export function sort(data: number[]) {
  if(data.length <= 1) return;

  for (let i = 1; i < data.length; i++) {
    const value = data[i];
    let j = i - 1;
    for(; j >= 0; j--) {
      if(data[j] > value) {
        data[j + 1] = data[j]
      } else {
        break;
      }
    }
    data[j + 1] = value;
  }
  
}
