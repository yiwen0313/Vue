function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

// commonjs规范导出
module.exports = {
  add,
  mul
}