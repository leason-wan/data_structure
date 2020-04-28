"use strict";
var arr = [1, 4, 6, 8, 1, 2];
sort(arr);
console.log(arr);
function sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        insert(arr, i - 1, arr[i]);
    }
}
function insert(sorted, max_index, value) {
    for (var i = max_index; i >= 0; i--) {
        // p_next = p_now > value ? p_now : value;
        if (sorted[i] > value) {
            sorted[i + 1] = sorted[i];
        }
        else {
            sorted[i + 1] = value;
        }
    }
}
//# sourceMappingURL=index.js.map