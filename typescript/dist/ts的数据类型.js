"use strict";
// number 
var a = 200;
var b = NaN;
var c = Infinity;
var d = 0xA22;
var e = 42;
var f = 54;
// string
var str1 = '这是一个字符串';
var str2 = "这也是一个字符串";
var str3 = "es6\u6A21\u677F\u5B57\u7B26\u4E32" + str1;
// boolean
var flag = true;
// 数组
// Array<数据类型>
var arr = [1, 1, 3]; // 只能是数字 
// 元组 (Tuple) 元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同
var arr2 = [10, 'sss'];
// arr2[0] = '998' // error 第一个元素类型为Number
arr2[0] = 223;
arr2[2] = 'a';
// arr2[2] = 556
