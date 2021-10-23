// 使用commonjs的模块化规范导入
const {add, mul} = require('./mathUtils');

console.log(add(1, 1));
console.log(mul(1, 1));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./info"

console.log(name);
console.log(age);
console.log(height);