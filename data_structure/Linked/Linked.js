"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SinglyLinked(value) {
    var state = {
        value: value,
        next: null
    };
    return state;
}
exports.SinglyLinked = SinglyLinked;
function DoublyLinked(value) {
    var state = {
        value: value,
        prev: null,
        next: null,
    };
    return state;
}
exports.DoublyLinked = DoublyLinked;
