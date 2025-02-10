import { Attribute } from '@/types/products'

// Định nghĩa các type đã cho sẵn
export interface CartAttributeOption {
  id: number
  product_id: number
  name: string
  attribute_id: number
  image: string
  price: number
}

export interface CartItem {
  id: string
  image?: string | StaticImport | undefined
  name: string
  price: number
  quantity: number
  attributes: CartAttributeOption[]
  availableAttributes?: Attribute[]
  total: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (
    item: CartItem,
    defaultImage: string,
    availableAttributes: Attribute[]
  ) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  handleSizeChange: (item: CartItem, newSize: CartAttributeOption) => void
  clearCart: () => void
}
