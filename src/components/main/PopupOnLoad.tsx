"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const PopupOnLoad = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // const hasSeenPopup = localStorage.getItem('hasSeenPopup')
    // if (!hasSeenPopup) {
    //   setShowPopup(true)
    //   localStorage.setItem('hasSeenPopup', 'true')
    // }
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-[90%] max-w-5xl h-[70vh] rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/visa.jpg" // Replace with your image
                alt="Popup Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Message & close button */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white p-1 rounded-md bg-gray-50/20 text-2xl font-bold hover:scale-110 transition"
              >
                <X />
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Visa Immigration Starts Here
              </h2>
              <p className="text-white text-lg max-w-xl">
                Unlock new opportunities with our expert visa consultation
                services. <span className="text-dark-orange bg-white/70 rounded-md px-1">Ardaas Immigration</span> is here to help you every step of
                the way.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupOnLoad;
