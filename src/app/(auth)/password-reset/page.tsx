import TitleAuth from '@/app/(auth)/_component/title-auth'
import PasswordResetForm from '@/app/(auth)/password-reset/password-reset-form'
import React from 'react'

const PasswordReset = () => {
  return (
    <div className='container flex flex-col items-center gap-6 py-20'>
      <TitleAuth title='đổi mật khẩu' />
      <PasswordResetForm />
    </div>
  )
}

export default PasswordReset
