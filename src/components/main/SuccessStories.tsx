'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SuccessStories() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className="bg-[#f3f6ec] text-black py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-extra-dark-orange"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Image and Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Image */}
            <div
              className="bg-gray-50 rounded-2xl p-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-[400px] bg-gray-300 rounded-lg flex items-center justify-center text-xl font-semibold text-gray-700">
                <Image
                    src={'https://img.freepik.com/free-photo/flat-lay-green-card-passport-assortment_23-2149828128.jpg?t=st=1751635721~exp=1751639321~hmac=0491403a1999e63278011234b99cefd37f48052fa29f732e574c6f875231a25a&w=1380'}
                    alt='story'
                    fill
                    className='object-cover rounded-lg'
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="bg-gray-100 rounded-2xl p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-dark-orange mb-3">Sukhdeep’s PR Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Sukhdeep came to us with a dream of building a new life in Canada. With our help, he
                successfully navigated the express entry process and received permanent residency
                within 8 months. His determination, combined with the right strategy, made it all possible.
              </p>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="space-y-4">
            {['Amrit’s Study Visa', 'Raj’s Work Permit', 'Simran’s Family Sponsorship', 'Amrit’s Study Visa', 'Raj’s Work Permit', 'Simran’s Family Sponsorship'].map(
              (label, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-4 rounded-lg text-white font-medium shadow"
                  style={{ backgroundColor: 'var(--dark-orange)' }}
                  data-aos="fade-left"
                  data-aos-delay={`${300 + idx * 100}`}
                >
                  {label}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
