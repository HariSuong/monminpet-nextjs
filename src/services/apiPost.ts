// src/services/apiPosts.js

import http from '@/lib/http'

import {
  CategoryPostRes,
  PostDetailRes,
  PostPaginationRes
} from '@/types/posts'

const postApiRequest = {
  getPostsCat: http.get<CategoryPostRes>('/posts', { cache: 'no-store' }),
  getPosts: (catId: number, page: number, orderBy?: any, q?: string) =>
    http.get<PostPaginationRes>(
      `/posts/${catId}?page=${page}${orderBy ? `&orderby=${orderBy}` : ''}${
        q ? `&q=${q}` : ''
      }`
    ),

  getDetail: (id: number) => http.get<PostDetailRes>(`/posts/detail/${id}`)
}

export default postApiRequest
