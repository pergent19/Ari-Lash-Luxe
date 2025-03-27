import React from 'react'
import faq from '@/assets/images/faq.png'
import Button from './Button/button'

export default function Faq() {
  return (
        <div
          data-testid="faqs-container"
          className="h-screen bg-cover bg-no-repeat bg-[50%_30%] flex flex-col justify-end items-center"
          style={{ backgroundImage: `url(${faq})` }}
        >
          <div className="text-center mb-5">
            <h2 className="text-[24px] md:text-[30px] text-white inter-bold">FAQS</h2>
          </div>
          
        <Button
          text="SEE MORE"
          href="#"
          className='mb-35'
        />
        </div>
  )
}
