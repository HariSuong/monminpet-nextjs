import envConfig from '@/config'
import { cookies } from 'next/headers'

const Profile = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/user/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken?.value}`
    }
  })
    .then(async res => {
      let payload
      try {
        payload = await res.json()
      } catch (error) {
        throw new Error('Response is not JSON')
      }
      const data = {
        status: res.status,
        payload
      }
      if (!res.ok) throw data
      return data
    })
    .catch(error => {
      console.error('Fetch error:', error)
      return null
    })

  console.log(result)
  return (
    <div>
      Email:
      {result?.payload?.data?.email}
    </div>
  )
}

export default Profile
