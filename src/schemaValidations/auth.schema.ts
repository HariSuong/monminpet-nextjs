import z from 'zod'

export const RegisterBody = z
  .object({
    full_name: z.string().trim().min(2, 'Tên phải có ít nhất 2 ký tự').max(256),
    email: z
      .string({
        message: 'Email không được để trống'
      })
      .email('Email không đúng định dạng'),
    password: z
      .string({
        message: 'Mật khẩu không được để trống'
      })
      .min(8, 'Mật khẩu có ít nhất 8 ký tự')
      .max(100)
  })
  .strict()

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const RegisterRes = z.object({
  token: z.string()
})

export type RegisterResType = z.TypeOf<typeof RegisterRes>

export const LoginBody = z
  .object({
    email: z.string().email('Email không đúng định dạng'),
    password: z.string().min(8, 'Mật khẩu có ít nhất 8 ký tự').max(100)
  })
  .strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>

export const LoginRes = RegisterRes

export type LoginResType = z.TypeOf<typeof LoginRes>
export const SlideSessionBody = z.object({}).strict()

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>
export const SlideSessionRes = RegisterRes

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>
