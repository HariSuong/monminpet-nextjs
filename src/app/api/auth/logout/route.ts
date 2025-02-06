import { HttpError } from '@/lib/http'
import authApiRequest from '@/services/apiAuth'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  // const res = await request.json()
  // const force = res.force as boolean | undefined
  // if (force) {
  //   return Response.json(
  //     { message: 'Buộc đăng xuất thành công' },
  //     {
  //       status: 200,
  //       headers: {
  //         // Xóa cookie sessionToken
  //         'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`
  //       }
  //     }
  //   )
  // }

  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken) {
    return Response.json(
      { message: 'Không nhận được session token' },
      { status: 400 }
    )
  }

  try {
    console.log('sessionToken.value', sessionToken.value)
    const result = authApiRequest.logoutFrNextServerToServer(sessionToken.value)

    return Response.json(result, {
      status: 200,
      headers: {
        // Xóa cookie sessionToken
        'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`
      }
    })
  } catch (error) {
    console.log('DDaayerror', error)
    if (error instanceof HttpError) {
      return Response.json(error.payload, {
        status: error.status
      })
    } else {
      return Response.json({ message: 'Lỗi không xác định' }, { status: 500 })
    }
  }
}
