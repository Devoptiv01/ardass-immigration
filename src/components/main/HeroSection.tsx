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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = ['/images/visa.jpg', '/images/visa.jpg', '/images/visa.jpg']

const HeroSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 })
//   }, [])

  return (
    <section className="bg-[#f3f6ec] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="bg-white/80 shadow-2xl p-3 rounded-2xl w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Lorem ipsum dolor sit<br />
            <span className="text-extra-dark-orange">Lorem, ipsum dolor.</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            sapiente ducimus eveniet laborum unde alias!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#"
              className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full shadow hover:shadow-md transition hover:scale-110 duration-500"
            >
              Ask Any Question
            </Link>

            <CalendlyPopupButton classes="bg-extra-dark-orange text-white px-6 py-3 rounded-full shadow hover:bg-dark-orange transition" />
          </div>
        </div>

        {/* Right: Vertical Slider */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <Swiper
            direction="vertical"
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-[400px] md:h-[500px] rounded-xl shadow-lg"
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
