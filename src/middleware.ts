/*import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePath = ['/account', '/profile', '/purchase-history', '/review']
const authPath = ['/login', '/register', '/password-reset']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const sessionToken = request.cookies.get('sessionToken')

  if (privatePath.some(path => pathname.startsWith(path) && !sessionToken)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (authPath.some(path => pathname.startsWith(path) && sessionToken)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  // const path = NextResponse.redirect(new URL('/home', request.url))

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: [...privatePath, ...authPath]
  matcher: [
    '/account',
    '/profile',
    '/purchase-history',
    '/review',
    '/login',
    '/register',
    '/password-reset'
  ]
}
*/

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/account', '/profile', '/purchase-history', '/review']
const authPaths = ['/login', '/register', '/password-reset']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get('sessionToken')

  // if (privatePaths.some(path => pathname.startsWith(path) && !sessionToken)) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }
  const isPrivate = privatePaths.some(
    path => pathname === path || pathname.startsWith(`${path}/`)
  )

  // if (authPaths.some(path => pathname.startsWith(path) && sessionToken)) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  const isAuth = authPaths.some(
    path => pathname === path || pathname.startsWith(`${path}/`)
  )

  // Nếu là trang riêng tư mà chưa có token => chuyển hướng đến login + redirect về trang cũ
  if (isPrivate && !sessionToken) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Nếu là trang login/register mà đã có token => chuyển về trang chủ
  if (isAuth && sessionToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: [...privatePath, ...authPath]
  matcher: [
    '/account',
    '/profile',
    '/purchase-history',
    '/review',
    '/login',
    '/register',
    '/password-reset'
  ]
}
