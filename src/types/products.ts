export interface Product {
  id: number
  name: string
  desc?: string | undefined
  hot?: number
  thumb: string
  price: number
  price_old: number
  video: string
  type_thumb_video: string
  discount?: number
}

export interface ProductPagination {
  current_page: number
  data: Product[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: { url: string; label: string; active: boolean }[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string
  to: number
  total: number
}

export interface ProductItemProps {
  id: number
  name: string
  description: string
  price: string
  imageUrl: string
  isNew?: boolean
  isHot?: boolean
}

export interface ProductListProps {
  products: Product[]
}

export interface Menu {
  id: number
  name: string
  thumb: string
  desc?: string
  video?: string
  type_thumb_video: string
}

export interface FAQ {
  id: number
  answer: string
  question: string
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

export interface ProductDetail {
  id: string
  name: string
  thumb: string
  desc: string | null
  hot: number
  imgs: string[]
  content: string
  video: string
  type_thumb_video: string
  tags: string[]
  menus: Menu
  faqs: FAQ[]
  price: number
  price_old: number
  price_text: string
  price_old_text: string
  suggests: Product[]
  attributes: {
    [key: number]: Attribute
  }
  related: Product[]
}
