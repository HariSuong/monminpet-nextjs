'use client'

import { sessionTokenClient } from '@/lib/http'
import accountApiRequest from '@/services/apiAccount'
import { useEffect, useState } from 'react'

const AboutUs = () => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      const result = await accountApiRequest.me(sessionTokenClient.value)
      console.log('result', result)
      if (!result) return
      setEmail(result?.payload?.data?.email)
    }
    fetchApi()
  }, [])

  return (
    <div>
      AboutUs. This is email:
      {email}
    </div>
  )
}

export default AboutUs
