'use client'

import envConfig from '@/config'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../AppProvider'
import accountApiRequest from '@/services/apiAccount'

const AboutUs = () => {
  const { sessionToken } = useAppContext()
  const [email, setEmail] = useState()

  useEffect(() => {
    const fetchApi = async () => {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_URL}/user/accounts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionToken}`
          }
        }
      ).then(async res => {
        const payload = await res.json()
        const data = {
          status: res.status,
          payload
        }
        if (!res.ok) throw data
        return data
      })

      // const result = await accountApiRequest.me(sessionToken)
      console.log(result)

      setEmail(result?.payload?.data?.email)
    }
    fetchApi()
  }, [sessionToken])

  return <div>AboutUs. This is email: {email}</div>
}

export default AboutUs
