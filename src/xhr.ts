import { AxiosRequestConfig } from './types/index'
/**
 * fundamental function
 * @param config axios config settings
 */
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toLowerCase(), url, true)

  request.send(data)
}
