import { z } from 'zod'

const contactSchema = z.object({
  specialization: z
    .string()
    .min(1, { message: 'Chọn chuyên khoa là bắt buộc.' }),
  petType: z.string().min(1, { message: 'Chọn thú nuôi là bắt buộc.' }),
  name: z.string().min(1, { message: 'Tên là bắt buộc.' }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: 'Số điện thoại phải có 10 chữ số.' }),
  email: z.string().email({ message: 'Email không hợp lệ.' }),
  appointmentDate: z.string().optional(),
  message: z.string().optional()
})

export default contactSchema
