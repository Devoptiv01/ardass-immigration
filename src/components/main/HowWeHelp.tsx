'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';


const services = [
  {
    id: 'work-permit',
    title: 'Work Permits',
    description: 'We assist individuals in securing work permits that allow them to gain valuable experience abroad.',
  },
  {
    id: 'lmia',
    title: 'LMIA',
    description: 'Expert help with the Labour Market Impact Assessment to support Canadian employers and foreign workers.',
  },
  {
    id: 'pr',
    title: 'Permanent Residency (PR)',
    description: 'Comprehensive PR application guidance, whether via Express Entry, PNP, or family sponsorship.',
  },
  {
    id: 'citizenship',
    title: 'Citizenship',
    description: 'Support through the Canadian citizenship process after meeting permanent residency obligations.',
  },
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
