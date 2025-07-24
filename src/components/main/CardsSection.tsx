"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import CalendlyPopupButton from "./CalendlyPopupButton";
import AOS from 'aos';

const cards = [
  {
    heading: "Personalized Advice",
    content: "Get one-on-one guidance tailored to your unique immigration goals and situation.",
  },
  {
    heading: "Consultation Slots",
    content: "We offer appointments up to 3 months in advance. New slots open at the end of each month.",
  },
  {
    heading: "Choose Your Category",
    content: "Book based on your need – Study Visa, PR, Work Permit, LMIA, or Family Sponsorship.",
  },
  {
    heading: "Avoid Delays",
    content: "Speak directly with RCICs to identify and fix issues before submitting your application.",
  },
  {
    heading: "Easy Booking Process",
    content: "Select a time, fill out a short form, and confirm your slot – it takes less than 2 minutes.",
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
