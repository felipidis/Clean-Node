import { type IHttpRequest, type IHttpResponse } from './http'

export interface IController {
  handle: (httpRequest: IHttpRequest) => IHttpResponse
}
