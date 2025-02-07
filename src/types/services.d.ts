export interface ServicesCat {
  id: number
  name: string
  thumb: string
  video?: string
  type_thumb_video?: string
  content: string
}

export interface ServicesListProps {
  servicesList: ServicesCat[]
}

export interface ServiceDetail {
  id: number
  title: string
  thumb: string
  desc: string
  hot: number
  video: string
  content: string
  type_thumb_video: string
  tags: string[]
  menus: {
    id: number
    name: string
    thumb: string
    desc: string | null
    content: string
    video: string
    type_thumb_video: string
  }
  faqs: {
    id: number
    question: string
    answer: string
  }[]
}

export interface ServiceDetailRes {
  success: boolean
  message: string
  data: ServiceDetail
}
export interface ServiceCatRes {
  success: boolean
  message: string
  data: ServicesCat[]
}
