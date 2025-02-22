import z from 'zod'

/**
 * "name" : "a",
        "email" : "a",
        "phone" : "a",
        "address": "a",
        "message": "a"
 */

export const Checkout = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Họ và Tên không được để trống')
      .min(2, 'Tên ít nhất có 2 chữ')
      .max(256, 'Tên tối đa 256 ký tự'),
    email: z.string().email('Email không đúng định dạng'),
    address: z
      .string()
      .trim()
      .min(1, 'Địa chỉ không được để trống')
      .min(2, 'Địa chỉ ít nhất có 2 chữ')
      .max(256, 'Địa chỉ tối đa 256 ký tự'),

    phone: z
      .string()
      .trim()
      .min(1, 'Số điện thoại không được để trống')
      .regex(
        /^0\d{9}$/,
        'Số điện thoại không hợp lệ (phải bắt đầu bằng 0 và có 10 chữ số)'
      ),
    message: z.string()
  })
  .strict()

export type CheckoutType = z.infer<typeof Checkout>

/**
 *
 * 
 * export interface CartAttributeOption {
  id: number
  product_id: number
  name: string
  attribute_id: number
  image: string
  price: number
}
export interface Attribute {
  id: number
  name: string
  product_attribute: {
    id: number
    product_id: number
    attribute_id: number
    name: string
    price: number
    image: string
  }[]
}
 *  export interface CartItem {
   id: string
   image?: string | StaticImport | undefined
   name: string
   price: number
   quantity: number
   attributes: CartAttributeOption[]
   availableAttributes?: Attribute[]
   total: number
 }
 */

export const CartAttributeOption = z.object({
  id: z.number(),
  product_id: z.number(),
  name: z.string(),
  attribute_id: z.number(),
  image: z.string(),
  price: z.number()
})

export const Attribute = z.object({
  id: z.number(),
  name: z.string(),
  product_attribute: z.array(
    z.object({
      id: z.number(),
      product_id: z.number(),
      attribute_id: z.number(),
      name: z.string(),
      price: z.number(),
      image: z.string()
    })
  )
})

export const CartItem = z.object({
  id: z.string(),
  image: z.string().optional(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  attributes: z.array(CartAttributeOption),
  availableAttributes: z.array(Attribute).optional(),
  total: z.number()
})

export const CheckoutRes = z.object({
  message: z.string()
})

export type CheckoutResType = z.infer<typeof CheckoutRes>

export const CheckoutBody = z.object({
  cart: z.array(CartItem),
  form: z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
    phone: z.string(),
    message: z.string()
  })
})

export type CheckoutBodyType = z.infer<typeof CheckoutBody>
