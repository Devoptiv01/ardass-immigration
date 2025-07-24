'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotate({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="bg-[#f3f6ec] py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with interactive effect */}
        <div className="relative" data-aos="fade-right">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-200 ease-out relative h-[560px] rounded-xl overflow-hidden"
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/images/visa-stamping.avif" 
              alt="Travel Family"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="absolute top-10 right-10 w-full h-full border-[5px] border-dark-orange rounded-xl z-10 pointer-events-none" />
          <div className="absolute bottom-20 -right-3 bg-dark-orange text-white font-bold px-6 py-3 lg:py-5 text-lg rounded-xl z-20 animate-bounce">
            <div className="flex items-center gap-2">
              <span className="text-3xl">25</span>
              <div className="text-sm leading-4">
                Years<br />Of Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right: Textual Content */}
        <div data-aos="fade-left">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-extra-dark-orange leading-tight mb-6">
            Trusted Guidance, Transparent Process
          </h2>

          {/* Key Value Points */}
          <div className="mb-4">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">ICCRC-Registered Consultants</h4>
                <p className="text-gray-700 text-sm">
                  Your case is handled by licensed experts who understand Canadian immigration laws inside and out.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">No Overpromises, Just Real Solutions</h4>
                <p className="text-gray-700 text-sm">
                  We provide honest advice and practical strategies tailored to your specific situation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">Affordable, Transparent Pricing</h4>
                <p className="text-gray-700 text-sm">
                  Every dollar you save with us is reinvested in making your application stronger — not hidden in fees.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">Personalized Guidance</h4>
                <p className="text-gray-700 text-sm">
                  We treat every client like family — with step-by-step help, quick responses, and full support.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link href={'/contact-us'} className="bg-extra-dark-orange hover:bg-dark-orange text-white tracking-wider font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 duration-500">
              Learn More <ArrowRight/>
            </Link>
            <Link href={'/contact-us'} className="bg-extra-dark-orange hover:bg-dark-orange text-white tracking-wider font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 duration-500">
              Contact Us <ArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
