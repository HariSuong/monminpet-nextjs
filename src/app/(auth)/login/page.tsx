import React from 'react'
import LoginForm from './login-form'
import TitleAuth from '@/app/(auth)/_component/title-auth'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Trở thành thành viên của chúng tôi để nhận nhiều ưu đãi.'
}
const LoginPage = () => {
  return (
    <div className='container flex flex-col items-center gap-6 py-20'>
      <TitleAuth title='đăng nhập tài khoản' />
      <LoginForm />
    </div>
  )
}

export default LoginPage
