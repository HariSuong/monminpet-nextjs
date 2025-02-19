// import envConfig from '@/config'

import ProfileForm from '@/app/(account)/_component/profile/profile-form'
import accountApiRequest from '@/services/apiAccount'
import { cookies } from 'next/headers'

const Profile = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  // Gọi API lấy thông tin tài khoản
  const result = await accountApiRequest.me(sessionToken.value)
  // console.log('result', result)
  if (!result) return

  return (
    <>
      <div className='flex justify-center items-center mb-8'>
        <div className='w-full md:max-w-5xl'>
          <div className='flex gap-1 text-xl'>
            <h2 className='font-light uppercase'>EMAIL ĐĂNG KÝ:</h2>
            <p className='text-lg font-bold'>{result.payload?.data.email}</p>
          </div>
        </div>
      </div>
      <div>
        <ProfileForm profile={result.payload?.data} />
      </div>
    </>
  )
}

export default Profile
