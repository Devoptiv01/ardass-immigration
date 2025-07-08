'use client';

import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const countries = [
  {
    name: 'Canada',
    flag: '/flags/canada.png',
  },
  {
    name: 'United States',
    flag: '/flags/bangladesh.png',
  },
  {
    name: 'Australia',
    flag: '/flags/australia.png',
  },
  {
    name: 'United Kingdom',
    flag: '/flags/uk.png',
  },
];

const features = ['Mistakes To Avoid', 'Your Startup', 'Knew About Fonts'];

export default function AvailableCountries() {
  // useEffect(() => {
  //   AOS.init({ once: true, duration: 700 });
  // }, []);

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-dark-orange font-semibold tracking-wide mb-2 uppercase">
          Available Countries
        </p>
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Urban Escapes City <br />
          Hopping Adventures
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                // src={country.flag}
                src={'https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/adventure-img1.png'}
                alt={country.name}
                width={50}
                height={50}
                className="mb-4 group-hover:scale-110 duration-500"
              />
              <h3 className="font-semibold text-lg text-foreground mb-4">
                {country.name}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-extra-dark-orange text-xl">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="bg-dark-orange hover:bg-extra-dark-orange text-white font-semibold py-2 px-6 rounded-full inline-flex items-center gap-2 transition-colors duration-300 hover:gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More <ArrowRight/>
        </motion.button>
      </div>
    </section>
  );
}
