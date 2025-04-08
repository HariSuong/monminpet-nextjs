'use client'
import { BreadcrumbWithCustomSeparator } from '@/components/breadcrumb-with-custom-separator'
import PostKeywords from '@/components/post/post-keywords'
import PostList from '@/components/post/post-list'
import { SkeletonCard } from '@/components/skeleton-card'
import type { PostDetail, PostDetailRes } from '@/types/posts'

import Image from 'next/image'
import React from 'react'
import slugify from 'slugify'

const PostDetail = ({ payload }: { payload: PostDetailRes }) => {
  return (
    <div className='container mx-auto py-24'>
      <BreadcrumbWithCustomSeparator
        parentLink={`/posts/${slugify(payload?.data.menus.name || '', {
          lower: true,
          strict: true,
          locale: 'vi'
        })}?catId=${payload.data.menus.id}&page=1`}
        corePage='Bài viết'
        coreLink='/posts'
        currentPage={payload.data.title}
        parentPage={payload?.data.menus.name}
      />
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='md:w-2/3 w-full'>
          <h1 className='text-gray-900 md:text-3xl text-lg title-font md:font-bold font-medium mb-1 uppercase md:leading-10'>
            {payload.data.title}
          </h1>
          {/* <img src={payload.data.thumb} className='w-full my-4' /> */}

          <Image
            width={800}
            height={627}
            src={payload.data.thumb}
            alt={payload.data.title}
            className='rounded my-8 w-full h-2/3'
          />
          <blockquote className='mt-6 border-l-2 pl-6 pr-2 py-2 text-sm italic bg-stone-100 text-gray-500 my-4'>
            {payload.data.desc}
          </blockquote>
          <div
            className='content-container'
            dangerouslySetInnerHTML={{ __html: payload.data.content }}
          />
        </div>
      </div>
      {(payload?.related ?? []).length > 0 && (
        <>
          <h2 className='text-gray-900 md:text-2xl text-lg title-font font-medium mb-4 md:mt-12 mt-10  uppercase'>
            Các tin liên quan
          </h2>
          <PostList posts={payload.related} />
        </>
      )}

      <PostKeywords
        keywords={payload.data.keywords}
        id={payload.data.menus.id}
      />
    </div>
  )
}

export default PostDetail
