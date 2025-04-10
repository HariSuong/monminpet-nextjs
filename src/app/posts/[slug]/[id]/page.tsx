import Loading from '@/app/loading'

import PostDetail from '@/components/post/post-detail'
import postApiRequest from '@/services/apiPost'
import { Suspense } from 'react'

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  try {
    // Trả về dữ liệu sản phẩm từ API
    const { payload } = await postApiRequest.getDetail(Number(id))

    // Kiểm tra nếu không có dữ liệu
    if (!payload?.data) {
      return <p>Không tìm thấy sản phẩm</p>
    }

    return (
      <Suspense fallback={<Loading />}>
        <PostDetail payload={payload} />
      </Suspense>
    )
  } catch (error) {
    console.error('error', error)
    // Xử lý lỗi nếu có
    return <p>Đã có lỗi xảy ra khi tải dữ liệu sản phẩm</p>
  }
}

export default PostDetailPage
