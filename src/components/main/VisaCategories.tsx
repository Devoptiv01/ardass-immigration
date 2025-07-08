"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCar, FaUserGraduate, FaPlane, FaBriefcase } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const visaItems = [
  {
    icon: <FaCar size={28} />,
    title: "Business Visa",
    description:
      "Lorem Ipsum is simply dummy text the printing and typeset Lorem Ipsum",
  },
  {
    icon: <FaUserGraduate size={28} />,
    title: "Student Visa",
    description:
      "Lorem Ipsum is simply dummy text the printing and typeset Lorem Ipsum",
  },
  {
    icon: <FaPlane size={28} />,
    title: "Tourist Visa",
    description:
      "Lorem Ipsum is simply dummy text the printing and typeset Lorem Ipsum",
  },
  {
    icon: <FaBriefcase size={28} />,
    title: "Working Visa",
    description:
      "Lorem Ipsum is simply dummy text the printing and typeset Lorem Ipsum",
  },
];

const VisaCategories = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotate({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      className="bg-[#f3f6ec] py-16 px-6 lg:px-20"
    //   style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <p className="text-sm text-gray-500 uppercase font-medium mb-1 tracking-wide">
                Visa Category
              </p>
              <h2
                className="text-3xl font-bold"
                // style={{ color: "var(--color-foreground)" }}
              >
                Path Less Traveled Off
              </h2>
            </div>
            <button className="mt-4 md:mt-0 bg-dark-orange hover:bg-extra-dark-orange text-white text-sm font-medium px-4 py-2 rounded-full transition-all  flex items-center gap-1 hover:gap-3 duration-300">
              All Category <ArrowRight/>
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {visaItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-xl border border-gray-100 transition-all duration-300 group hover:border hover:border-dark-orange"
                // style={{
                //   color: "var(--color-foreground)",
                // }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-dark-orange mb-4 group-hover:animate-bounce ">
                  {item.icon}
                </div>
                <p className="text-xs text-gray-500 uppercase mb-1">Visa</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          data-aos="fade-left"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="transition-transform duration-200 ease-out relative h-[550px] my-auto hover:shadow-xl"
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/images/visa.jpg"
            alt="Visa Category"
            fill
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
