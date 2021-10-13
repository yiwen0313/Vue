// 编程范式：命令式编程 / 声明式编程
// 编程范式：面向对象昂编程(第一公民:对象) / 函数式编程(第一公民:函数)

/*
* 3个高阶函数：filter()  map()  reduce()
*   - filter()中的回调函数有一个要求：必须返回一个 boolean值
*     - true：函数内部会自动将这次回调的 n加入到新的数组中
*     - false：函数内部会过滤掉这次的 n
*
* */

const nums = [10, 20, 111, 222, 444, 40, 50];

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue ,n) => preValue + n);
console.log(total);


/*
let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue, n) {
  return preValue + n;
}, 0);
console.log(total);
*/


/*
// 1.filter() 的使用
// [10, 20, 40, 50]
let newNums = nums.filter(function (n) {
  return n < 100;
});
// console.log(newNums);

// 2.map() 的使用
// [20, 40, 80, 100]
let new2Nums = newNums.map(function (n) {
  return n * 2;
});
// console.log(new2Nums);

// 3.reduce() 的使用: 对数组中所有内容进行汇总
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n;
}, 0)
console.log(total);
*/


//
/*
// 1.需求：取出所有小于100的数
let newNums = [];
for (let n of nums) {
  if (n < 100) {
    newNums.push(n);
  }
}

// 2.需求：将所有小于100的数字进行转换：*2
let new2Nums = [];
for (let n of newNums) {
  new2Nums.push(n * 2);
}

// 3.需求：将所有new2Nums数字相加
let total = 0;
for (let n of new2Nums) {
  total += n;
}
console.log(total);*/