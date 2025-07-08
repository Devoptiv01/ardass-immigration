"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What could possibly be your first question?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    question: "How do you use this feature effectively?",
    answer:
      "You can utilize it by reading documentation, exploring examples, and practicing consistently with the framework tools.",
  },
  {
    question: "Is this service available 24/7?",
    answer:
      "Yes, our platform is cloud-based and accessible 24/7 from anywhere in the world.",
  },
];


const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-4 ">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-sm text-gray-500">F.A.Q</p>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-extra-dark-orange">Questions</span>
          </h3>
        </div>

        <ul className="mt-20 space-y-10">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="flex flex-col gap-3"
              onClick={() => toggleFAQ(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex items-center justify-center p-3 rounded-full bg-extra-dark-orange h-12 w-12 text-white text-xl">
                  ?
                </div>
                <div className="bg-white p-5 px-10 w-full rounded flex justify-between items-center cursor-pointer">
                  <h4 className={`text-md font-medium text-gray-900 hover:text-dark-orange duration-300 ${openIndex === index && ' !text-dark-orange ' }`}>{faq.question}</h4>
                  <ChevronDown className={` ${openIndex === index && 'rotate-180 !duration-500'}`}/>
                </div>
              </div>

             {openIndex === index && (
              <div className="flex items-start gap-4 duration-500 transition-all">
                <div className="bg-indigo-100 p-5 px-10 w-full rounded">
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
                  <img src="/icons/head.svg" alt="head" className="h-12 w-12 bg-extra-dark-orange p-2 rounded-full my-auto"  />
              </div>)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
