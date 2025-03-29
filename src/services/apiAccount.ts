import http from '@/lib/http'
import {
  AccountGiftResType,
  AccountResType,
  UpdateMeBodyType,
  UpdateMeResponseType
} from '@/schemaValidations/account.schema'
import { GetBalanceResponseType } from '@/schemaValidations/balance.schema'
import { InvoicesResponseType } from '@/schemaValidations/invoice.schema'
import { TransactionsResponseType } from '@/services/transactions.schema'

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
  // New method to fetch invoices
  invoices: (sessionToken: string, page: number = 1) =>
    http.get<InvoicesResponseType>(`/user/accounts/invoices?page=${page}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  // New method to fetch invoice detail
  invoice: (sessionToken: string, id: number) =>
    http.get<InvoicesResponseType>(`/user/accounts/invoice/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  getBalance: (sessionToken: string) =>
    http.get<GetBalanceResponseType>('/user/accounts/getbalance', {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  transactions: (sessionToken: string, page: number = 1) =>
    http.get<TransactionsResponseType>(
      `/user/accounts/transactions?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`
        }
      }
    ),
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
