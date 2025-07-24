"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between a work permit and PR?",
    answer:
      "A work permit allows you to work in Canada temporarily, while Permanent Residency (PR) gives you the right to live and work in Canada indefinitely, along with access to social benefits.",
  },
  {
    question: "How long does it take to get a student visa for Canada?",
    answer:
      "Processing times vary by country, but typically range from 4 to 12 weeks. Starting your application early is key.",
  },
  {
    question: "Can I bring my family on a work visa?",
    answer:
      "Yes, in many cases you can bring your spouse and children. Spouses may be eligible for open work permits, and children for study permits.",
  },
  {
    question: "What is an LMIA and why is it important?",
    answer:
      "An LMIA (Labour Market Impact Assessment) is a document that employers in Canada need before hiring foreign workers. It proves there's a need for a foreign hire due to a lack of local candidates.",
  },
  {
    question: "Do you assist with visitor or tourist visa applications?",
    answer:
      "Yes, we provide full support for tourist visa applications, including documentation guidance, cover letter preparation, and interview readiness.",
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
