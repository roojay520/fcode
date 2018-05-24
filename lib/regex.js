/*
 * 常用正则表达式
 * Created Date: Thursday, May 24th 2018, 11:34:55 am
 * Author: Roojay
 */
const REGEX = {
  PHONE: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
  NAME: /^[a-zA-Z\u4E00-\u9FA5\uf900-\ufa2d·s]{1,20}$/,
};
export default REGEX;

