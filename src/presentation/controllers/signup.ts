import { MissingParamError } from '../errors/missing-param-error'
import { type IHttpResponse, type IHttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }

    return {
      statusCode: 200,
      body: httpRequest.body
    }
  }
}
