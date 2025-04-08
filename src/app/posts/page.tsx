import PostCat from '@/components/post/post-cat'
import postApiRequest from '@/services/apiPost'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bài Viết',
  description:
    'Cập nhật các bài viết mới nhất về chăm sóc thú cưng, mẹo nuôi thú, dinh dưỡng và kiến thức thú y tại Monminpet.',
  openGraph: {
    title: 'Bài Viết | Monminpet',
    description:
      'Cập nhật các bài viết mới nhất về chăm sóc thú cưng, mẹo nuôi thú, dinh dưỡng và kiến thức thú y tại Monminpet.',
    url: 'https://monminpet.com/posts',
    images: [
      {
        url: 'https://monminpet.com/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Monminpet Posts'
      }
    ],
    siteName: 'Monminpet'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bài Viết | Monminpet',
    description:
      'Cập nhật các bài viết mới nhất về chăm sóc thú cưng, mẹo nuôi thú, dinh dưỡng và kiến thức thú y tại Monminpet.',
    images: ['https://monminpet.com/logo/logo.png']
  }
}

const PostsHome = async () => {
  const { payload: postsCat } = await postApiRequest.getPostsCat
  // console.log('postsCat', postsCat)
  return (
    <div>
      <PostCat postsCat={postsCat.data} newPost={postsCat.new_post[0]} />
    </div>
  )
}

export default PostsHome
