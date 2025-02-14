import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { StarFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const PurchaseList = () => {
  const products = [
    {
      id: 1,
      name: 'FERA PET',
      quantity: 1,
      desc: 'Bột bổ sung sữa dê bổ lông tóc cho chó và mèo',
      price: 990000,
      totalPrice: 1050000,
      rating: 4,
      detailsLink: '/order-details/1'
    },
    {
      id: 2,
      name: 'PRARINTEL',
      quantity: 1,
      desc: 'Bột bổ sung sữa dê bổ lông tóc cho chó và mèo',
      price: 60000,
      totalPrice: 60000,
      rating: 0,
      detailsLink: '/order-details/2'
    },
    {
      id: 3,
      name: 'FERA PET',
      quantity: 1,
      desc: 'Bột bổ sung sữa dê bổ lông tóc cho chó và mèo',
      price: 990000,
      totalPrice: 990000,
      rating: 5,
      detailsLink: '/order-details/3'
    }
  ]

  return (
    <div className='my-10 flex flex-col items-center'>
      <div className='w-3/4'>
        <h2 className='mb-4 w-fit bg-black text-white uppercase font-bold text-xl px-4 py-2'>
          Lịch sử mua hàng
        </h2>
        <div className='space-y-4'>
          {products.map((product, index) => (
            <Card key={index} className='shadow-md p-4'>
              <div className='flex gap-20'>
                {/* Product details */}
                <div className='w-2/5 space-y-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <Image
                        src={'/images/relate-product-1.png'}
                        alt={product.name}
                        width={80}
                        height={80}
                        className='w-20 h-20 object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <div className='flex justify-between'>
                        <h3 className='text-lg font-semibold'>
                          {product.name}
                        </h3>
                        <p className='text-sm text-gray-500'>
                          x{product.quantity}
                        </p>
                      </div>
                      <p className='text-sm text-gray-500'>{product.desc}</p>
                      <p className='text-xl font-bold'>
                        {product.price.toLocaleString()}đ
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <Image
                        src={'/images/relate-product-1.png'}
                        alt={product.name}
                        width={80}
                        height={80}
                        className='w-20 h-20 object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <div className='flex justify-between'>
                        <h3 className='text-lg font-semibold'>
                          {product.name}
                        </h3>
                        <p className='text-sm text-gray-500'>
                          x{product.quantity}
                        </p>
                      </div>
                      <p className='text-sm text-gray-500'>{product.desc}</p>
                      <p className='text-xl font-bold'>
                        {product.price.toLocaleString()}đ
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-between w-3/5'>
                  <div className='flex justify-between'>
                    <p className='text-base text-gray-500 italic mt-2'>
                      {`${product.quantity} sản phẩm`}
                    </p>
                    {/* Price & Total */}
                    <p className='font-bold flex gap-3 mt-2'>
                      <span className='text-gray-500 italic'>Thành tiền:</span>
                      <p className='text-[#b00303]'>
                        {product.totalPrice.toLocaleString()}đ
                      </p>
                    </p>
                    <Button className='bg-[#b00303] text-white py-2 mt-0 rounded-md hover:bg-red-600'>
                      {/* {product.rating > 0 ? 'Mua lại' : 'Đánh giá'} */}
                      Mua lại
                    </Button>
                  </div>
                  {/* Action Buttons */}
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <p className='italic'>Đánh giá của bạn: </p>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <StarFilledIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <a
                      href={`/account/purchase-history/${product.id}?tab=purchase-history`}
                      className='text-sm text-gray-500'>
                      Chi tiết đơn hàng {`>`}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PurchaseList
