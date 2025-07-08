"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import CalendlyPopupButton from "./CalendlyPopupButton";
import AOS from 'aos';


const cards = [
  {
    heading: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Dolor Sit",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "Amet Consectetur",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    heading: "Adipiscing Elit",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    heading: "Tempor Incididunt",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CardsSection = () => {

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className="bg-white/40 py-16 px-4 sm:px-6 lg:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-md p-6 text-center border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4">{card.heading}</h3>
            <div className="mb-6 flex-grow">
              <p className="text-gray-600 text-sm">{card.content}</p>
            </div>
            <CalendlyPopupButton classes="w-full py-2" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CardsSection;
