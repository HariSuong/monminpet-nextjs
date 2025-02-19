import http from '@/lib/http'
import {
  AccountGiftResType,
  AccountResType,
  UpdateMeBodyType,
  UpdateMeResponseType
} from '@/schemaValidations/account.schema'

const accountApiRequest = {
  me: (sessionToken: string) =>
    http.get<AccountResType>('/user/accounts', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  gift: (sessionToken: string) =>
    http.get<AccountGiftResType>('/user/accounts/gifts', {
      headers: {
        // Authorization: `Bearer ${sessionToken}`
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  updateAccount: (body: UpdateMeBodyType, sessionToken: string) => {
    return http.post<UpdateMeResponseType>('/user/accounts/update', body, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  },
  // Gọi Next.js server để cập nhật thông tin người dùng
  updateAccountFromClientToNextServer: (body: UpdateMeBodyType) => {
    return http.put<UpdateMeResponseType>('/api/account/update', body, {
      baseUrl: ''
    })
  }
}

export default accountApiRequest
