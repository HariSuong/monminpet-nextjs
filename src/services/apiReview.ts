import http from '@/lib/http'
import {
  ReviewFormType,
  ReviewsResType
} from '@/schemaValidations/review.schema'

const reviewApiRequest = {
  getReviews: (sessionToken: string, id: number) =>
    http.get<ReviewsResType>(`/user/accounts/review/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    }),
  insertReview: (body: ReviewFormType, sessionToken: string) => {
    return http.post<ReviewFormType>('/user/accounts/review/invoice', body, {
      headers: {
        Authorization: `Bearer ${sessionToken}`
      }
    })
  },
  // Gọi Next.js server để cập nhật thông tin người dùng
  insertReviewFromClientToNextServer: (body: ReviewFormType) => {
    return http.put<ReviewFormType>('/api/account/review', body, {
      baseUrl: ''
    })
  }
}
export default reviewApiRequest
