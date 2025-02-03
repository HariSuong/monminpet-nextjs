import { Product } from './products'

// src/types/cats.ts
export interface Category {
  id: number
  name: string
  thumb: string
  products: Product[]
}
