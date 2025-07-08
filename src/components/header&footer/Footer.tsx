"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


export default function Footer() {
  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <footer className="bg-extra-dark-orange text-white py-10 px-6 md:px-16">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
        <div className="flex gap-2 items-center">
          <img
            src="/images/Ardass-Logo-Black&White.jpg"
            alt="logo"
            className="h-10 w-10 rounded-lg"
          />
          <h2 className="text-xl font-semibold">Ardass Immigration</h2>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-extra-dark-orange p-[1px] rounded-lg duration-300 h-6 w-6 transition hover:bg-white" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-extra-dark-orange p-[1px] rounded-lg duration-300 h-6 w-6 transition hover:bg-white" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-xl hover:text-extra-dark-orange p-[1px] rounded-lg duration-300 h-6 w-6 transition hover:bg-white" />
          </Link>
          <Link href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl hover:text-extra-dark-orange p-[1px] rounded-lg duration-300 h-6 w-6 transition hover:bg-white" />
          </Link>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/30 my-6"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Useful Links */}
        <motion.div data-aos="fade-up" className="space-y-2">
          <h3 className="font-semibold text-lg">Useful Links</h3>
          <ul className="text-sm space-y-1">
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/'}>Home </Link></li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/about-us'}>About </Link> Us</li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/contact-us'}>Contact </Link></li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/services'}>Services </Link></li>
          </ul>
        </motion.div>

        {/* Service Menu */}
        <motion.div data-aos="fade-up" data-aos-delay="100" className="space-y-2">
          <h3 className="font-semibold text-lg">Our Services</h3>
          <ul className="text-sm space-y-1">
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/services'}> Study Visa </Link></li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/services'}> Work Permit </Link></li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/services'}> PR Consultation </Link></li>
            <li className="flex gap-1 items-center"><ChevronRight /> <Link href={'/services'}> Tourist Visa </Link></li>
          </ul>
        </motion.div>

        {/* Quick Info */}
        <motion.div data-aos="fade-up" data-aos-delay="200" className="space-y-2">
          <h3 className="font-semibold text-lg">Contact Info</h3>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-1"> <IoLocationOutline className="h-4 w-4"/>123 Immigration Street, Toronto, Canada</li>
            <li className="flex items-center gap-1"><FaPhone className="h-4 w-4"/> +1 (234) 567-8901</li>
            <li className="flex items-center gap-1"><TfiEmail className="h-4 w-4 mr-1"/>  info@dummyemail.com</li>
          </ul>

        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 pt-4 text-sm text-white/80 flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© { new Date().getFullYear()} Ardass Immigration. All Rights Reserved.</p>
        {/* <div className="flex gap-4">
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/contact" className="hover:text-white">Support</Link>
        </div> */}
      </div>
    </footer>
  );
}
