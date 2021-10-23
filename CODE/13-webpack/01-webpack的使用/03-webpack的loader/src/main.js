// 使用commonjs的模块化规范导入
const {add, mul} = require('./js/mathUtils');

console.log(add(1, 1));
console.log(mul(1, 1));


// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info"

console.log(name);
console.log(age);
console.log(height);


// 3.依赖css文件
require('./css/normal.css');


// 4.依赖 less文件
require('./css/special.less');
document.writeln('<h2>Hello</h2>');