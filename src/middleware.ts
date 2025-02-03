import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePath = ['/account']
const authPath = ['/login', '/register']

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
  matcher: ['/account', '/login', '/register']
}
