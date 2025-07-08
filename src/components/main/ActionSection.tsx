'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import CalendlyPopupButton from './CalendlyPopupButton';

export default function ActionSection() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Buttons + Heading */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 
            data-aos="fade-up" 
            className="text-3xl md:text-4xl font-bold leading-snug text-primary"
          >
            Let's talk solutions
          </h2>
          <p data-aos="fade-up" data-aos-delay="50" className="text-base text-muted">
            Need answers or want to consult? Reach out or book a session with our experts.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-aos="fade-up"
            data-aos-delay="100"
            // onClick={() => window.location.href = '/contact-us'}
            className="bg-white py-4 px-6 rounded-xl shadow transition-all text-lg font-semibold hover:bg-dark-orange hover:text-white duration-500"
          >
            <Link href={'/contact-us'}>
             Ask Any Question
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-aos="fade-up"
            data-aos-delay="150"
            // onClick={() =>
            //   window.open('https://calendly.com/YOUR-CALENDLY-URL', '_blank')
            // }
            // className="bg-white py-4 px-6 rounded-xl shadow transition-all text-lg font-semibold hover:bg-dark-orange hover:text-white duration-500"
          >
            {/* Book Consultation */}
            <CalendlyPopupButton classes='bg-white py-4 px-6 rounded-xl shadow transition-all text-lg font-semibold hover:bg-dark-orange hover:!text-white duration-500 w-full
             !text-black'/>
          </motion.button>
        </div>

        {/* Right: Dummy Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow"
          data-aos="fade-left"
        >
          <Image
            src="https://img.freepik.com/free-photo/3d-rendering-new-york-city-isometric-miniature_23-2150598134.jpg?t=st=1751833126~exp=1751836726~hmac=263b71b8fa20d8df65f45ec43447352f2095d4b0a36729ba02e0c5c13b33ce6a&w=1380"
            alt="Consultation"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
