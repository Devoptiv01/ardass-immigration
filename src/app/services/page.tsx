import DescriptionSection from '@/components/main/DescriptionSection'
import Faqs from '@/components/main/Faqs'
import SuccessStories from '@/components/main/SuccessStories'
import React from 'react'

const Page = () => {
  return (
    <div>
      <SuccessStories/>
      <DescriptionSection/>
      <Faqs/>
    </div>
  )
}

export default Page
