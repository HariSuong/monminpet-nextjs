import Title from '@/components/title'
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
    <div className='w-full mx-auto my-8 '>
      {/* <h2 className='md:text-2xl text-lg md:font-semibold font-medium text-gray-800 mb-12 mt-16 uppercase'>
        câu hỏi thường gặp
      </h2> */}
      <Title title='câu hỏi thường gặp' />

      <Accordion
        type='single'
        collapsible
        className='w-full last:border-b first:border-t'>
        {faqs.map(f => (
          <AccordionItem value={f?.answer} key={f?.id}>
            <AccordionTrigger>
              <div>{f.answer}</div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className='content-container'
                dangerouslySetInnerHTML={{ __html: f.question }}></div>
              {/* <div>{f.question}</div> */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
