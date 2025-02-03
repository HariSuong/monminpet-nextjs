import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { FAQ } from '@/types/products'

export function Faq({ faqs }: { faqs?: FAQ[] }) {
  if (!faqs) return null

  return (
    <div className='w-full mx-auto my-8'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-12 mt-16 uppercase'>
        câu hỏi thường gặp
      </h2>

      <Accordion
        type='single'
        collapsible
        className='w-full last:border-b first:border-t'>
        {faqs.map(f => (
          <AccordionItem value={f?.answer} key={f?.id}>
            <AccordionTrigger>{f.answer}</AccordionTrigger>
            <AccordionContent>{f.question}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
