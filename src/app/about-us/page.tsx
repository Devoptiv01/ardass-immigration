import ActionSection from '@/components/main/ActionSection'
import HowWeHelp from '@/components/main/HowWeHelp'
import SuccessStories from '@/components/main/SuccessStories'
import VideoContentSection from '@/components/main/VideoContentSection'
import React from 'react'

const Page = () => {
  return (
    <div>
      <VideoContentSection/>
      <HowWeHelp/>
      <ActionSection/>
      <SuccessStories/>
    </div>
  )
}

export default Page
