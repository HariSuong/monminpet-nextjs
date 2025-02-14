import React from 'react'
import RegisterForm from './register-form'
import TitleAuth from '@/app/(auth)/_component/title-auth'

const RegisterPage = () => {
  return (
    <div className='container flex flex-col items-center gap-6 py-20'>
      <TitleAuth title='đăng ký tài khoản' />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
