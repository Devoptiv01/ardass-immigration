import CalendlyPopupButton from '@/components/main/CalendlyPopupButton'
import CardsSection from '@/components/main/CardsSection'
import ContactSection from '@/components/main/ContactSection'
import Faqs from '@/components/main/Faqs'
import React from 'react'

const Page = () => {
  return (
    <div>
      <ContactSection/>
      <CardsSection/>
      {/* <CalendlyPopupButton classes='w-[300px] rounded-2xl py-3 text-xl'/> */}
      <Faqs/>
    </div>
  )
}

export default Page
