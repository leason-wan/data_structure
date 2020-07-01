# 插入排序

## 思路

如何将一个元素插入有序的数组中，数组仍是有序的？

我们可以从右至左找到一个当前元素应该插入的位置，将数据插入。

通过上面的方法，我们可以将一个数组分成两个部分，数组的第一个元素和剩下的元素。

第一部分只有一个元素，可以看作有序数组。

将第二部分的元素，依次插入第一部分的有序数组中。

## 例子

### 把数组从小到大排序

首先我们需要将数组分成两个部分。

将第二个部分插入第一个有序数组部分中。

插入排序过程如下图所示：

<img src="https://i.postimg.cc/Lg2fM615/2020-07-01-00-08-18.gif" height="200px" >

## js实现

```javascript
function sort(arr: number[]) {
  if(arr.length <= 1) return;

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
```

## Tips

向数组中插入元素时，从右往左的插入效率比较高。