'use client'

import HotPost from '@/components/post/hot-post'
import Title from '../title'

import PostSlider from '@/components/post/post-slider'
import slugify from 'slugify'
import { NewPost } from '@/types/posts'

interface CategoryPost {
  id: number
  name: string
  thumb: string
  posts: {
    id: number
    title: string
    desc: string
    thumb: string
    count_view: number
  }[]
}

const PostCat: React.FC<{ postsCat: CategoryPost[]; newPost: NewPost }> = ({
  postsCat,
  newPost
}) => {
  const posts = postsCat?.map(cat => {
    if (cat.posts.length === 0) return null

    return (
      <div key={cat.id}>
        <Title
          title={cat.name}
          subtitle=''
          to={`/posts/${slugify(cat?.name || '', {
            lower: true,
            strict: true,
            locale: 'vi'
          })}?catId=${cat.id}&page=1`}
        />
        <div>
          <div className='p-4 lg:max-w-7xl sm:max-w-full'>
            <PostSlider posts={cat.posts} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='py-4 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8'>
      <HotPost newPost={newPost} />
      <div>{posts}</div>
    </div>
  )
}

export default PostCat
