function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}


/**
 * 生成缓动函数在均匀时间点的进度数组
 * @param {number} steps - 数组长度，必须是大于等于2的整数
 * @returns {number[]} 包含缓动进度值的数组，每个元素保留6位小数
 */
function generateEasingArray(steps) {
    
}
// 输出: [ 0, 0.103515625, 0.5, 0.896484375, 1 ]
// 测试示例
console.log(generateEasingArray(5)); 