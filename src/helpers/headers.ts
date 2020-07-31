import { isPlainObject } from './util'

/**
 * 对请求头进行格式统一，忽略大小写
 * @param headers 请求头
 * @param normalizeName 需要进行比较的头部信息
 */
function normalizeHeaderName(headers: any, normalizeName: string): void {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

/**
 * 处理请求头
 * @param headers 请求头
 * @param data data数据
 */
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}
