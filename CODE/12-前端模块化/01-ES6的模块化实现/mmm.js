// 1.导入{}中定义的变量
import {flag, sum} from "./aaa.js";
if (flag) {
  console.log('小明是天才');
  console.log(sum(10, 20));
}

// 2.导入export定义的变量
import {num1, height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的 function/类
import {mul, Person} from "./aaa.js";

console.log(mul(25, 25));

const p = new Person();
p.run();

// 4.导入 export default中的内容
import addr from "./aaa.js";

addr('啦啦啦')


// 5.统一全部导入
import * as info from "./aaa.js";

console.log(info.height);
