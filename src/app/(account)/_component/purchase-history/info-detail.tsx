import React from 'react'

const InfoDetail = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col gap-2'>
          <div>Phương thức thanh toán:</div>
          <div>Thời gian đặt hàng:</div>
          <div>Thời gian thanh toán:</div>
          <div>Thời gian hoàn thành:</div>
        </div>
        <div className='flex flex-col gap-2'>
          <div>Chuyển khoản ngân hàng</div>
          <div>28-08-2024 15:01</div>
          <div>28-08-2024 15:02</div>
          <div>29-08-2024 16:30</div>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <div>Địa chỉ nhận hàng:</div>
        <p>Thục Đoan</p>
        <p>0939730048</p>
        <p>1046 Âu Cơ, P14, Tân Bình, TP. Hồ Chí Minh</p>
      </div>
    </div>
  )
}

export default InfoDetail
