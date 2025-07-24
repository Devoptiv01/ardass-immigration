"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import ReactPlayer from "react-player";

const VideoContentSection = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 800 });
  // }, []);

  return (
    <section className=" py-12 px-4 md:px-12">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        data-aos="fade-up"
      >
        {/* Left Side: Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gray-100 rounded-xl shadow-md p-4"
        >
          <ReactPlayer
            url="https://youtu.be/9xwazD5SyVg?si=l1LG5tviWsrDS8uh"
            playing
            loop
            controls={false}
            muted={true}
            width="100%"
            height="100%"
            style={{ borderRadius: "0.75rem" }}
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gray-100 rounded-xl shadow-md p-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-[var(--dark-orange)]">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-3">
            Ardaas Immigration is a trusted immigration consultancy committed to
            helping individuals and families achieve their dreams of living,
            studying, or working abroad.
          </p>
          <p className="text-gray-700">
            With years of experience, we bring clarity, strategy, and care to
            every case we handle
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoContentSection;
