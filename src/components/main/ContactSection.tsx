"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import AOS from "aos";
import Link from "next/link";
import { RECAPTCHA_SITE_KEY } from "@/libs/contants";
import axios from "axios";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import { Loader } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  captcha?: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const captchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    try {
      const finalData = {
        ...data,
        subject: "From Contact Form in contact-us route"
      }
      delete finalData.captcha;
      // console.log("Form submitted:", finalData);
      const res = await axios.post('api/sendEmail', finalData)
       if (res.status === 200) {
        toast.success(res?.data?.message || 'Successfully Submitted')
         reset();
        captchaRef.current?.reset();
       }
    } catch (error) {
      toast.error('Something went wrong' )
    }
  };

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <section className="bg-[#f3f6ec] text-black py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto rounded-3xl shadow-xl border border-gray-200 backdrop-blur-xl bg-white/70 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           className="flex flex-col justify-between h-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-extra-dark-orange">
            Get in touch with us now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:gap-6 mb-6 h-full">
            {[
              { title: "Phone Number", value: "+1 (123) 456-7890" },
              { title: "Email", value: "contact@example.com" },
              { title: "Location", value: "123 Main Street, NY" },
              { title: "Mon to Fri", value: "9:00am – 5:00pm" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white shadow-md p-4 h- text-center border border-gray-200 hover:scale-105 transition duration-300 flex flex-col justify-center items-center hover:bg-dark-orange group"
              >
                <p className="group-hover:text-white font-semibold text-base sm:text-lg">{item.title}</p>
                <p className="group-hover:text-white/70 text-sm text-gray-500 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 text-white rounded-xl bg-extra-dark-orange hover:bg-dark-orange transition font-medium tracking-wider text-lg"
          >
            <Link href={'/contact-us'} >
                Ask a Question
            </Link>
          </motion.button>
        </motion.div>

        {/* Right Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-extra-dark-orange">
            Contact Us Form
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* First Name */}
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <textarea
                placeholder="Your message..."
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 bg-white"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Captcha */}
            <div className="sm:col-span-2 flex flex-col items-start gap-2">
              <ReCAPTCHA
                ref={captchaRef}
                sitekey={RECAPTCHA_SITE_KEY as string}
                theme="light"
                onChange={(token) => setValue("captcha", token || "")}
              />
              {errors.captcha && (
                <p className="text-red-500 text-sm">Captcha is required</p>
              )}
              <input
                type="hidden"
                {...register("captcha", { required: false })}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled= {isSubmitting}
              className="sm:col-span-2 w-full py-3 rounded-xl  text-white bg-extra-dark-orange hover:bg-dark-orange  transition font-medium tracking-wider shadow-md text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Submit */}
              {isSubmitting ? <Loader className="animate-spin w-fit mx-auto"/> : "Submit"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
