import z from 'zod'
import { CartItem as CheckoutCartItem } from './checkout.schema' // Import CartItem từ checkout schema

// Define Product schema
export const Product = z.object({
  product_id: z.number(),
  name: z.string(),
  price: z.number(),
  thumb: z.string(),
  quantity: z.number(),
  rating: z.number(),
  content: z.string().nullable()
})

// Define Invoice schema
export const Invoice = z.object({
  id: z.number(),
  price: z.number(),
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  method: z.number(),
  delivered_at: z.string().nullable(),
  received_at: z.string().nullable(),
  created_at: z.string(),
  fee: z.number(),
  discount: z.number().nullable(),
  products: z.array(Product),
  json_invoices: z.array(CheckoutCartItem).optional() // Sử dụng CheckoutCartItem
})

// Define Paginated response schema for invoices
export const InvoicesResponse = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    current_page: z.number(),
    data: z.array(Invoice),
    first_page_url: z.string(),
    last_page: z.number(),
    last_page_url: z.string(),
    links: z.array(
      z.object({
        url: z.string().nullable(),
        label: z.string(),
        active: z.boolean()
      })
    ),
    next_page_url: z.string().nullable(),
    path: z.string(),
    per_page: z.number(),
    prev_page_url: z.string().nullable(),
    to: z.number(),
    total: z.number()
  })
})

export type InvoicesResponseType = z.infer<typeof InvoicesResponse>
