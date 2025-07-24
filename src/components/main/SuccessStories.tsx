'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stories = [
  {
    name: 'Gurpreet – Spousal PR Approved',
    image: '/images/spousal-visa.jpg',
    title: 'Gurpreet’s Spousal PR Journey',
    description:
      'Gurpreet was struggling with delays and unclear IRCC requests. Our team helped gather the right evidence, write strong supporting letters, and got her PR approved within 9 months.',
  },
  {
    name: 'Jasleen – Study Visa to PR Pathway',
    image: '/images/study-to-pr.jpg',
    title: 'Jasleen’s Study Visa to PR Path',
    description:
      'From choosing the right course to Post-Graduation Work Permit, Jasleen followed our PR roadmap. Today, she’s a permanent resident with a full-time job in Toronto.',
  },
  {
    name: 'Armaan – LMIA + Work Permit Success',
    image: '/images/lmia-work.jpg',
    title: 'Armaan’s Work Permit via LMIA',
    description:
      'Armaan received a job offer but was unsure how to proceed. We guided his employer through LMIA approval, and secured a closed work permit in 6 weeks.',
  },
  // {
  //   name: 'Kiran – Tourist Visa for Parents',
  //   image: '/images/visitor-visa.jpg',
  //   title: 'Kiran’s Super Visa for Parents',
  //   description:
  //     'Kiran wanted to bring her parents for her wedding. We processed a Super Visa application with all financials and insurance in place, approved in under 20 days.',
  // },
  // {
  //   name: 'Manpreet – PNP through OINP',
  //   image: '/images/oinp.jpg',
  //   title: 'Manpreet’s OINP Nomination Success',
  //   description:
  //     'After being stuck in the Express Entry pool, Manpreet qualified through the OINP Employer Job Offer stream. We handled the paperwork end-to-end.',
  // },
  // {
  //   name: 'Amandeep – Citizenship Ceremony',
  //   image: '/images/citizenship.jpg',
  //   title: 'Amandeep’s Citizenship Milestone',
  //   description:
  //     'Amandeep trusted us once for her PR, and returned to apply for Canadian citizenship. From application to interview prep — she did it all stress-free.',
  // },
];

export default function SuccessStories() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);
  const [activeStory, setActiveStory] = useState(0);

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
                  src={'/images/two-us-passports.avif'} 
                  alt='Permanent Residency Approved'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
            </div>

            {/* Story Content */}
            <div
              className="bg-gray-100 rounded-2xl p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-dark-orange mb-3">
                Ravneet’s Express Entry PR
                </h3>
              <p className="text-gray-700 leading-relaxed">
                Ravneet was unsure where to begin her journey, but with a detailed consultation and personalized
                CRS improvement plan, we helped her qualify under Express Entry. Her PR was approved in just
                7 months with zero additional documentation requests.
              </p>
            </div>
          </div>

          {/* Right Story Buttons */}
          <div className="space-y-4">
            {stories.map((story, idx) => (
  <motion.button
    key={idx}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => setActiveStory(idx)}
    className={`w-full text-left py-3 px-4 rounded-lg text-white font-medium shadow ${
      true
        ? 'bg-extra-dark-orange'
        : 'bg-dark-orange hover:bg-extra-dark-orange'
    } transition-all duration-300 space-y-1`}
  >
    <div className="text-base font-semibold">{story.name}</div>
    <div className="text-sm text-orange-100">{story.description}</div>
  </motion.button>
))}


          </div>
        </div>
      </div>
    </section>
  );
}
