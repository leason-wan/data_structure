"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Base Array
function Array(length) {
    var state = {
        length: length,
    };
    for (var i = 0; i < length; i++) {
        state[i] = undefined;
    }
    return bindMethod(state);
}
exports.Array = Array;
function bindMethod(state) {
    var get = function (index) {
        return state[index];
    };
    var set = function (index, value) {
        state[index] = value;
    };
    var insert = function (index, value) {
        for (var i = state.length; i >= index; i--) {
            state[i] = state[i - 1];
        }
        state[index] = value;
    };
    var del = function (index) {
        for (var i = index; i < state.length - 1; i++) {
            state[i] = state[i + 1];
        }
        state[state.length] = undefined;
    };
    var toString = function () {
        var str = '';
        var strStart = "[ ";
        var strEnd = state[state.length - 1] + " ]";
        str += strStart;
        for (var i = 0; i < state.length - 1; i++) {
            str += state[i] + ', ';
        }
        str += strEnd;
        return str;
    };
    var apis = {
        get: get,
        set: set,
        insert: insert,
        del: del,
        toString: toString,
    };
    withCheck(apis, state);
    return __assign({}, apis);
}
function withCheck(apis, state) {
    var checkOverflow = function (index) {
        if (index < 0 || index > state.length - 1) {
            throw new Error("operate " + index + " of array is overflow the memory, required valid index");
        }
    };
    var key;
    var _loop_1 = function () {
        var method = apis[key];
        apis[key] = function (index) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            checkOverflow(index);
            return method(index, args.toString());
        };
    };
    for (key in apis) {
        _loop_1();
    }
}
