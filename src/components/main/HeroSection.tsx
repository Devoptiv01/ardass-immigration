'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import CalendlyPopupButton from './CalendlyPopupButton'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ArrowRight } from 'lucide-react'

const images = ['/images/visa.jpg', '/images/visa.jpg', '/images/visa.jpg']

const HeroSection = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 })
  // }, [])

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3 -mt-5" data-aos="fade-right">
          <p className="text-sm tracking-widest font-medium text-gray-500 uppercase">
            Ardaas Immigration
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your <br/> 
            Future <br/> 
            <span className='text-dark-orange'>Starts</span> Here
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 ">
            At Ardaas Immigration, we don’t just process visas — we build futures. With deep expertise in immigration laws, personalized support, and a success-driven approach, we guide you at every step of your journey to Canada and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-1">
            <Link
              href="/contact-us"
              className="px-6 py-3 border border-gray-800 text-gray-800 rounded-full flex items-center justify-center gap-2 hover:shadow transition duration-300 hover:bg-dark-orange hover:text-white"
            >
              Contact Us <span className="text-lg"><ArrowRight/></span>
            </Link>

            <CalendlyPopupButton classes="bg-extra-dark-orange text-white px-6 py-3 rounded-full shadow hover:bg-dark-orange transition" />
          </div>
        </div>

        {/* Right: Image Slider */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
          <Swiper
            direction="vertical"
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-[400px] md:h-[500px] w-[90%] md:w-[80%] max-w-md rounded-xl shadow-lg"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
