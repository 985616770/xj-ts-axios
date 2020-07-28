import { isDate, isPlainObject } from './util'

/**
 * 将序列化后的字符串，恢复特殊字符
 * @param val
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 对url 对参数进行处理
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    // 空值忽略
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    // 对数组的处理
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    // 类型判断
    values.forEach(val => {
      if (isDate(val)) {
        // 是否为日期
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        //  是否为对象
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  // 拼接处理后的字符串数组
  let serializedParams = parts.join('&')
  if (serializedParams) {
    // 取哈希值的前面内容
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
