"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCar, FaUserGraduate, FaPlane, FaBriefcase } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const visaItems = [
  {
    icon: <FaUserGraduate size={28} />,
    title: "Education & Student Visa Guidance",
    description:
      "From course selection to post-study work pathways, we offer expert support that saves both time and tuition missteps — maximizing your ROI.",
  },
  {
    icon: <FaBriefcase size={28} />,
    title: "Work Permit & LMIA Support",
    description:
      "Seamless work permit processing and LMIA assistance with job-matching support — helping clients avoid costly mistakes and delays.",
  },
  {
    icon: <FaCar size={28} />,
    title: "Business & Investor Immigration",
    description:
      "We help entrepreneurs and investors gain the right foothold in Canada through structured, compliant, and opportunity-driven programs.",
  },
  {
    icon: <FaPlane size={28} />,
    title: "Tourist & Super Visa Services",
    description:
      "Simplified and success-oriented visitor visa services, ensuring your family reunions or vacations are hassle-free and fully optimized.",
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
              {/* <p className="text-sm text-gray-500 uppercase font-medium mb-1 tracking-wide">
                Visa Category
              </p> */}
              <h2
                className="text-3xl font-bold"
                // style={{ color: "var(--color-foreground)" }}
              >
                <span className="tracking-wide text-dark-orange text-4xl">Services</span> 
                <br/> We Offer — Value Beyond Just Visas
              </h2>
              <p className="text-sm text-gray-500 py-2">
                At Ardaas Immigration, we deliver more than just approvals — we
                deliver peace of mind, personalized planning, and real financial
                value.
              </p>
            </div>
            <Link href='/contact-us' className="mt-4 md:mt-0 bg-dark-orange hover:bg-extra-dark-orange text-white text-sm font-medium px-4 py-2 rounded-full transition-all  flex items-center gap-1 hover:gap-3 duration-300">
              All Category <ArrowRight />
            </Link>
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
