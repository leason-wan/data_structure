# 快速排序

## 思路

如何将两个有序数组合并成一个有序数组？

我们可以依次遍历两个有序数组，将从两个数组中取到的两个值对比，将较小的一个值依次放进新的数组中。

换个角度看，我们可以把一个无序的数组分割成只含有一个元素的数组，只含有一个元素的数组是有序的，那么我们再次把每个单元素数组合并起来，整个数组就被排好了序。

## 例子

把数组从小到大排序。

首先我们把数组分割成单元素数组。

然后我们通过将两个有序数组合并成一个有序数组的方法，再次将所有单元素数组组合起来。

合并排序过程如下图所示：

<img src="https://i.postimg.cc/XvMxrdgw/2020-07-01-19-32-14.gif" height="200px" >

## js实现

```javascript

function sort(data, start = 0, end = data.length) {
  if (end - start <= 1) return;

  const mid = Math.ceil((start + end) / 2);

  sort(data, start, mid);
  sort(data, mid, end);

  merge(data, start, mid, end);
}

function merge(data, start, mid, end) {
  const dataOne = data.slice(start, mid);
  const dataTwo = data.slice(mid, end);

  // 添加哨兵，节省数组判断逻辑
  dataOne.push(Infinity);
  dataTwo.push(Infinity);

  let k = start, i = 0, j = 0;
  for(; k < end; k++) {
    data[k] = dataOne[i] < dataTwo[j] ? dataOne[i++] : dataTwo[j++];
  }
  
}

```

## Tips

难点在于分治递归的处理。

可以通过一个通用的递归公式减少递归coding的思考难度：

```javascript
// 以归并排序为例
function recursion(data) {
  // 终止条件
  if (end - start < 1) return;

  // 递归本层的逻辑处理
  const mid = Math.ceil((start + end) / 2);

  // 向下递归
  sort(data, start, mid);
  sort(data, mid, end);

  // 递归底层的逻辑处理
  merge(data, start, mid, end); 

}
```
