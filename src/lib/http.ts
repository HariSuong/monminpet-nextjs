'use client'

import envConfig from '@/config'

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

export class HttpError extends Error {
  status: number
  payload: {
    message: string
    [key: string]: any
  }
  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error')
    this.status = status
    this.payload = payload
  }
}

const request = async <Response>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  options?: CustomOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined

  const baseHeaders = {
    'Content-Type': 'application/json'
  }

  // Nếu không truyền baseUrl, tức baseUrl = undefined thì lấy từ envConfig.NEXT_PUBLIC_API_URL
  // Nếu truyền baseUrl thì lấy giá trị truyền vào, truyền '' đồng nghĩa với việc chúng ta gọi API tới Nextjs server

  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_URL
      : options.baseUrl

  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  console.log('Request Option:', options)
  console.log('Request URL:', fullUrl)
  console.log('Request Body:', body)

  const response = await fetch(fullUrl, {
    ...options,
    method,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    body
  })

  const payload: Response = await response.json()

  console.log('Response:', response)
  console.log('Payload:', payload)

  const data = {
    status: response.status,
    payload
  }
  // console.log('Dữ liệu ', data)

  if (!response.ok) {
    throw new HttpError(data)
  }

  return data
}

const http = {
  get: <Response>(
    url: string,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) => request<Response>(url, 'GET', options),
  post: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) => request<Response>(url, 'POST', { ...options, body }),

  put: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) => request<Response>(url, 'PUT', { ...options, body }),

  delete: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) => request<Response>(url, 'DELETE', { ...options, body })
}

export default http
