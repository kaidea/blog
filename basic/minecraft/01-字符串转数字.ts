function hashStringToInt(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return hash >>> 0;  // 转成无符号32位整数
}

console.log(hashStringToInt('区块'))
