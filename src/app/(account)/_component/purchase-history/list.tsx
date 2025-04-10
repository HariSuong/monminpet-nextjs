import BuyAgain from '@/app/(account)/_component/purchase-history/buy-again'
import { Card } from '@/components/ui/card'
import accountApiRequest from '@/services/apiAccount'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

const PurchaseList = async () => {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken?.value) return <div>Chưa đăng nhập</div>

  // Gọi API lấy thông tin tài khoản
  const result = await accountApiRequest.invoices(sessionToken.value)
  // console.log('result', result)
  if (!result)
    return (
      <div className='mt-4'>
        {' '}
        <p>Chưa có đơn hàng</p> <Link href='/products'>Tiếp tục mua sắm</Link>
      </div>
    )
  // console.log('result', result.payload.data.data)
  const productList = result.payload.data.data
  console.log('productList', productList)
  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='md:w-3/4 w-full'>
        <h2 className='mb-4 w-fit bg-black text-white uppercase font-bold md:text-xl text-base md:px-4 px-2 md:py-2 py-1'>
          Lịch sử mua hàng
        </h2>
        <div className='space-y-4'>
          {productList.map((products, index) => {
            return (
              <Card key={products?.id} className='shadow-md p-4'>
                <div className='flex flex-col md:flex-row gap-20'>
                  {/* Product details */}

                  <div className='md:w-2/5 w-full space-y-6'>
                    {products?.products?.map((product, index) => {
                      return (
                        <div
                          key={index}
                          className='flex items-center space-x-4'>
                          <div className='flex-shrink-0'>
                            <Image
                              src={`https://cdn.monminpet.com/storage/app/public/${product?.thumb}`}
                              alt={product.name}
                              width={80}
                              height={80}
                              className='w-20 h-20 object-cover rounded-md'
                            />
                          </div>
                          <div>
                            <div className='flex justify-between'>
                              <h3 className='md:text-lg text-base md:font-semibold font-medium'>
                                {product.name}
                              </h3>
                              <p className='text-sm text-gray-500'>
                                x{product.quantity}
                              </p>
                            </div>
                            {/* <p className='text-sm text-gray-500'>{product.desc}</p> */}
                            <p className='md:text-xl font-bold'>
                              {product.price.toLocaleString('vi-VN', {
                                currency: 'VND'
                              })}
                              đ
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className='flex flex-col justify-between md:w-3/5 w-full'>
                    <div className='flex flex-col md:flex-row items-end md:items-stretch justify-between'>
                      <p className='text-base text-gray-500 italic mt-2'>
                        {`${products?.quantity} sản phẩm`}
                      </p>
                      {/* Price & Total */}
                      <p className='font-bold flex gap-3 md:mt-2 my-2'>
                        <span className='text-gray-500 italic'>
                          Thành tiền:
                        </span>
                        <p className='text-[#b00303]'>
                          {Number(products?.total).toLocaleString('vi-VN', {
                            currency: 'VND'
                          })}
                          đ
                        </p>
                      </p>
                      <BuyAgain jsonInvoices={products?.json_invoices ?? ''} />
                    </div>
                    {/* Action Buttons */}
                    <div className='flex flex-col md:flex-row justify-between md:items-center items-end md:mt-0 mt-4'>
                      <div className='flex gap-2'>
                        <p className='italic'>Đánh giá của bạn: </p>
                        <div className='flex items-center'>
                          {[...Array(5)].map((_, i) => (
                            <StarFilledIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < (products?.rating ?? 5)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <a
                        href={`/account/purchase-history/${products?.id}?tab=purchase-history`}
                        className='text-sm text-gray-500'>
                        Chi tiết đơn hàng {`>`}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PurchaseList
