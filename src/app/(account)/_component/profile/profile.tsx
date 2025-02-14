// import envConfig from '@/config'

import ProfileForm from '@/app/(account)/_component/profile/profile-form'
import accountApiRequest from '@/services/apiAccount'
import { cookies } from 'next/headers'

const Profile = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  // Gọi API lấy thông tin các tỉnh thành phồ ở VN từ https://provinces.open-api.vn/
  //

  const response = await fetch('https://provinces.open-api.vn/api/')
  if (!response.ok) return
  const getProvinces = await response.json()

  // Gọi API lấy thông tin tài khoản
  const result = await accountApiRequest.me(sessionToken.value)
  // console.log('result', result)
  if (!result) return

  return (
    <>
      <div className='flex gap-1 ml-28 text-xl'>
        <h2 className='font-light uppercase'>EMAIL ĐĂNG KÝ:</h2>
        <p className='text-lg font-bold'>{result.payload?.data.email}</p>
      </div>
      <div>
        <ProfileForm profile={result.payload?.data} province={getProvinces} />
      </div>
    </>
  )
}

export default Profile
