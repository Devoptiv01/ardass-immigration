"use client";

import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aos from "aos";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

   useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div ref={menuRef} className="sticky top-0 z-[110] flex justify-between items-center px-5 w-full h-16  font-medium max-w-[1800px] mx-auto border-b-[1px] border-dark-orange bg-white">
      <div className="w-full hidden md:block">
        <div className="w-full flex justify-between items-center">
          {/* // first part of the header */}
          <div className="flex justify-between items-center gap-4 w-full ">
            <div className="w-fit">
              <ul className="flex gap-3 lg:gap-4  items-center w-full  ">
                <li className="w-full min-w-20 flex flex-col mt-1 items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/services"}>Services</Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-dark-orange"></div>
                </li>
                {/* <li className="w-full min-w-20 flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/pricing"}>Pricing</Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-dark-orange"></div>
                </li> */}
                {/* <li className="w-full min-w-[100px] flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link
                    href={"/our-portfolio"}
                    className=" w-full min-w-[80px]"
                  >
                    Our Portfolio
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-dark-orange"></div>
                </li> */}
                <li className="w-full min-w-16 flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/about-us"}>About us</Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-dark-orange"></div>
                </li>
                <li className="w-full min-w-20 flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/contact-us"}>Contact Us</Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-dark-orange"></div>
                </li>
                {/* <li className="min-w-[140px] lg:min-w-[167px] hover:bg-light-orange hover:font-bold flex justify-center items-center gap-1 group duration-300 cursor-pointer  rounded-full h-12 md:h-14">
                  <Link href={"/contact-us"} className=" w-fit ">
                    Contact Us
                  </Link>
                </li> */}
              </ul>
            </div>
            <Link
                data-aos="fade-right"
              href={"/"}
              className="relative h-10 w-10 rounded-lg overflow-hidden"
            >
              <Image
                src={
                  "/images/Ardass-Logo.JPG"
                }
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* // Mobile Header */}
      <div className="w-full hidden max-md:block ">
        <div className="w-full flex justify-between items-center gap-4 ">
          <Link
          data-aos="fade-left"
            href={"/"}
            className="relative h-10 w-10 rounded-lg overflow-hidden"
          >
            <Image
              src={
                "/images/Ardass-Logo.JPG"
              }
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <AlignJustify />
          </button>
        </div>

        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "200%" }}
              transition={{ duration: 0.5 }}
              className="w-screen max-w-96 bg-dark-orange text-black absolute top-[64px] right-0 px-8 py-5 text-left z-50 overflow-hidden rounded-l-lg"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col gap-2 items-center w-full"
              >
                {[
                  { href: "/services", label: "services" },
                  // { href: "/pricing", label: "Pricing" },
                  // { href: "/our-portfolio", label: "Our Portfolio" },
                  { href: "/about-us", label: "about" },
                  { href: "/contact-us", label: "Contact Us" },
                ].map(({ href, label }) => (
                  <motion.li
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: "100%" },
                      visible: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: "100%" },
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full min-w-24 flex flex-col gap-1 group duration-300 cursor-pointer hover:tracking-widest hover:font-medium"
                  >
                    <Link href={href} className="capitalize text-white">
                      {label}
                    </Link>
                    <div className="w-0 duration-300 rounded-lg h-[2px] bg-white group-hover:w-full"></div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Header;
