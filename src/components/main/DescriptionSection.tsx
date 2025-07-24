'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const contentData = {
  basic: "At Ardaas Immigration, we guide clients through study, work, visitor, PR, LMIA, PNP, and sponsorship pathways with ease. Our process is transparent, affordable, and personalized. Whether you're starting your journey or stuck midway, we are here to simplify your immigration process.",
  
  medium:
    "We assist with Express Entry, PNPs like OINP, student admissions, work permits, LMIA-backed jobs, and spousal/family sponsorship. Our ICCRC-licensed consultants ensure documents are accurate and deadlines are met. Clients save time, avoid rejections, and benefit from honest consultation. Our packages are designed to give value, not just promises.",
  
  indepth: `Ardaas Immigration offers end-to-end immigration services including Express Entry, provincial nominations (OINP, SINP, BC PNP), student visas, LMIA assistance, work permits, tourist visas, and PR applications. We don’t just fill forms — we analyze your case for possible rejections and offer preemptive solutions. From college selection and SOP guidance to interview prep and settlement advice, every client gets a customized strategy. With live Express Entry and PNP webinars, bilingual support, and refund assurance policies, we work hard to ensure peace of mind. Clients who save money by choosing Ardaas invest it in their settlement and future — where it matters most.`
};


const getLines = (text: string, lines: number) => {
  return text.split(' ').slice(0, lines * 5).join(' ')
//   return text.split(' ').slice(0, lines * 5).join(' ') + '...';
};

export default function DescriptionSection() {
  const [active, setActive] = useState<'basic' | 'medium' | 'indepth'>('basic');

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className=" py-10 px-6 md:px-16 text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Image */}
        <div
          className="flex-1 bg-gray-200 rounded-xl overflow-hidden p-4 flex items-center justify-center"
          data-aos="fade-right"
        >
          <Image
            src="https://img.freepik.com/free-photo/3d-rendering-new-york-city-isometric-miniature_23-2150598134.jpg?t=st=1751833126~exp=1751836726~hmac=263b71b8fa20d8df65f45ec43447352f2095d4b0a36729ba02e0c5c13b33ce6a&w=1380"
            alt="Immigration"
            width={400}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right: Description */}
        <div
          className="flex-1 bg-gray-200 rounded-xl p-6"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-semibold mb-4 text-extra-dark-orange text-center">
            Description
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-4">
            {(['basic', 'medium', 'indepth'] as const).map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(type)}
                className={`px-4 py-2 rounded-full border font-medium ${
                  active === type
                    ? 'bg-dark-orange text-white'
                    : 'bg-white text-black border-gray-300'
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>

          {/* Scrollable Content */}
          <div className="h-72 overflow-y-auto p-4 bg-white rounded-lg border border-gray-200  scrollbar-hide">
            <p className="text-gray-700 leading-relaxed">
              {active === 'basic' && getLines(contentData.basic, 25)}
              {active === 'medium' && getLines(contentData.medium, 25)}
              {active === 'indepth' && getLines(contentData.indepth, 25)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
