import http from '@/lib/http'
import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType
} from '@/schemaValidations/auth.schema'
import { MessageResType } from '@/schemaValidations/common.schema'

const authApiRequest = {
  login: (body: LoginBodyType) => http.post<LoginResType>('/login', body),
  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>('/register', body),
  auth: (body: { sessionToken: string }) =>
    http.post('api/auth', body, {
      baseUrl: ''
    }),
  logoutFrNextServerToServer: (sessionToken: string) =>
    http.post<MessageResType>(
      '/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      }
    ),
  logoutFrClientToNextServer: () =>
    http.post(
      '/api/auth/logout',
      {},
      {
        baseUrl: ''
      }
    )
}

export default authApiRequest
