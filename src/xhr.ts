import { AxiosRequestConfig, AxiosPromise } from './types/index'
/**
 * fundamental function
 * @param config axios config settings
 */
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) request.responseType = responseType

    request.open(method.toLowerCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const res
    }
    Object.keys(headers).forEach(name => {
      // 不存在data，设置content-type无意义
      if (data === null && name.toLowerCase() === 'content-type') delete headers[name]
      request.setRequestHeader(name, headers[name])
    })
    request.send(data)
  })
}
