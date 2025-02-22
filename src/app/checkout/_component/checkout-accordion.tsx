'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CheckoutForm from '@/app/checkout/_component/checkout-form'
import PaymentInfo from '@/app/checkout/_component/payment-info'
import { AccountResType } from '@/schemaValidations/account.schema'

const CheckoutAccordion = ({
  profile
}: {
  profile: AccountResType['data']
}) => {
  const [activeAccordion, setActiveAccordion] = useState('delivery')

  return (
    <Accordion
      type='single'
      collapsible
      value={activeAccordion}
      onValueChange={setActiveAccordion}>
      <AccordionItem value='delivery'>
        <AccordionTrigger className='hover:no-underline'>
          <h2 className='text-2xl font-bold'>Thông tin giao hàng</h2>
        </AccordionTrigger>
        <AccordionContent>
          <CheckoutForm
            profile={profile}
            onFormValid={() => setActiveAccordion('payment')}
          />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='payment' disabled={activeAccordion !== 'payment'}>
        <AccordionTrigger className='hover:no-underline'>
          <h2 className='text-2xl font-bold'>Thanh toán</h2>
        </AccordionTrigger>
        <AccordionContent>
          <PaymentInfo />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default CheckoutAccordion
