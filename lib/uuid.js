/**
 * 获取指定位数的随机字符串, 默认十八位
 * @param {number} num
 * @return {string} uuid
 */
const genUuid = (num = 18) => {
  let len = num;
  const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const seedLen = seed.length - 1;
  let uuid = '';
  while (len--) {
    uuid += seed[~~(Math.random() * seedLen)];
  }
  return uuid;
};

export default genUuid;

