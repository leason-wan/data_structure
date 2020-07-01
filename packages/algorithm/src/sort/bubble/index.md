# 冒泡排序

## 思路

遍历数组，每次对比当前元素与下一元素，按对比结果调整当前元素与下一元素的位置。

每次遍历，我们符合顺序的元素就会冒泡到最后一位，所以遍历数组长度次，排序完成。

## 例子

把数组从小到大排序。

首先我们需要遍历数组，然后对比当前元素与下一个位置元素的大小，如果当前元素大于下一个元素，就交换位置，相等或小于不用交换。

每次遍历都会有一个元素冒泡出来完成排序，所以遍历数组长度次数（两次循环）即可。

冒泡排序过程如下图所示：

<img src="https://i.postimg.cc/6624MkJq/2020-06-30-19-06-02.gif" height="200px" >

## js实现

其实我们还可以做一个优化，如果遍历一次没有元素交换的话，说明我们的元素全部排序完成了，可以终止接下来的无效循环。

```javascript

function swap(data, i, j) { 
  let temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

function sort(data) {
  if (data.length < 2) return;

  let bubbleLength = data.length;
  let hasSwap = true; // 是否交换标记

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

```

## Tips

冒泡排序的循环有两点可以优化

- 每次循环数量递减。
- 如果没有交换产生时，说明所有元素排序完成，可以终止后面的循环。