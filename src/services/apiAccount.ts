import http from '@/lib/http'
import { AccountResType } from '@/schemaValidations/account.schema'

const accountApiRequest = {
  me: (sessionToken: string) => {
    console.log(sessionToken)
    http.post<AccountResType>('/user/accounts', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  }
}

export default accountApiRequest
