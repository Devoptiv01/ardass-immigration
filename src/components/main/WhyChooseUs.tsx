'use client';

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

const WhyChooseUs = () => {
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
  
      const rotateX = ((y - centerY) / centerY) * 15; // max 10deg
      const rotateY = ((x - centerX) / centerX) * 15;
  
      setRotate({ x: -rotateX, y: rotateY });
    };
  
    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
    };

  return (
    <section className="bg-[#f3f6ec] py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
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
        //   className="relative h-[560px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/visa.jpg" 
              alt="Travel Family"
              fill
              className="rounded-xl object-cover"
            />
            {/* <div className="border border-dark-orange w-full h-full"></div> */}
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

        {/* Right: Content */}
        <div data-aos="fade-left">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-extra-dark-orange leading-tight mb-6">
            Experiencing Traditions<br />Cultural Immersion
          </h2>

          {/* Services */}
          <div className="mb-4">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">Lorem, ipsum.</h4>
                <p className="text-gray-700 text-sm ">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa lorem ipsum
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white bg-extra-dark-orange rounded-full p-1 mt-1">
                <Check/>
              </span>
              <div>
                <h4 className="font-semibold text-lg text-black">Lorem, ipsum.</h4>
                <p className="text-gray-700 text-sm">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa lorem ipsum
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <button className="bg-extra-dark-orange hover:bg-dark-orange text-white tracking-wider font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 duration-500">
              Read More <ArrowRight/>
            </button>
            <div className="flex items-center gap-3">
              {/* <div className="bg-green-100 text-green-700 rounded-full p-3">
                📞
              </div> */}
              <button className="bg-extra-dark-orange hover:bg-dark-orange text-white tracking-wider font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 duration-500">
              Contact us <ArrowRight/>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
