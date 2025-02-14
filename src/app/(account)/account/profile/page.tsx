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
      <h1>Profile Form</h1>
      <p>{result.payload?.data.email}</p>
      <ProfileForm profile={result.payload?.data} />
    </>
  )
}

export default Profile
