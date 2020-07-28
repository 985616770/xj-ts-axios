import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    // 是普通对象就进行JSON化
    return JSON.stringify(data)
  }
  return data
}
