'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';

const services = [
  { id: 's1', title: 'S1', description: 'Short description 1' },
  { id: 's2', title: 'S2', description: 'Short description 2' },
  { id: 's3', title: 'S3', description: 'Short description 3' },
  { id: 's4', title: 'S4', description: 'Short description 4' },
];

export default function HowWeHelp() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Help</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition-all text-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl font-semibold text-primary mb-2">{service.title}</div>
            <p className="text-sm text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
