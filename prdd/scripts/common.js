'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//暴露模块  commonjs模块化开发
// module.exports = 'aihong';
// var name = 'aihong';
// module.exports = name;

//AMD CMD ES6

//用es6天生提供的模块化开发工具开发，es6不能直接在浏览器中运行，需要依托于webpack的babel，loader才能运行
//定义局部变量 作用于是块级作用域
var name = 'zhangsan2';
//default将某个变量输出
exports.default = name;