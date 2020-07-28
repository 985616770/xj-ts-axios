const toString = Object.prototype.toString

/**
 * 判断是否为日期
 * @param val
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 判断是否为对象
 * @param val
 */
// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

/**
 * 判断是否为普通对象
 * @param val
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
