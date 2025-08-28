"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import vamsi from "../assets/vamsi.jpg";
import tanuj from "../assets/tanuj.jpg";
import Hari from "../assets/Hari.jpg";
import prasanth from "../assets/prasanth.jpg";
import dinesh from "../assets/dinesh.jpg";

// Testimonials Data
const testimonials = [
  {
    name: "SaiThanuj Reddy",
    role: "SkillTag Co-Founder",
    image: tanuj,
    quote:
      "Top-Notch Development Partner — Working with Transerg was seamless. They understood our vision for the mobile healthcare app and brought it to life with precision. Their communication, speed, and attention to detail were unmatched.",
  },
  {
    name: "Nagavamsikrishna",
    role: "GrabOn Owner",
    image: vamsi,
    quote:
      "Reliable, Scalable, Efficient — Our franchise management platform needed rapid scaling. Transerg's web app solution allowed us to manage 50+ outlets from a single dashboard. They delivered beyond expectations.",
  },
  {
    name: "Harinadh",
    role: "NatureBite Co-Founder",
    image: Hari,
    quote:
      "Great Experience from Start to Finish — Transerg helped us build an AI-powered resume shortlisting engine that reduced our hiring time drastically. Their team was proactive, innovative, and incredibly responsive throughout the project.",
  },
  {
    name: "Prasanth Rathod",
    role: "TechLead at GrabShare",
    image: prasanth,
    quote:
      "Outstanding Cloud Expertise — The team migrated our infrastructure to AWS with zero downtime. Their knowledge and professionalism were exceptional throughout the project.",
  },
  {
    name: "Dinesh",
    role: "Product Manager at Grabcash",
    image: dinesh,
    quote:
      "Seamless Collaboration — Working with Transerg felt like working with an internal team. They were dedicated, communicative, and always went above and beyond expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-5 py-2 text-sm font-medium rounded-full bg-purple-100 text-purple-700"
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mt-6"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mt-4 mb-16"
        >
          Don't just take our word for it. Hear from some of our satisfied clients
          about their experience working with us.
        </motion.p>

        {/* Continuous Scroller */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          freeModeMomentum={false}
          slidesPerView={1}
          autoplay={{
            delay: 0, // no pause between slides
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000} // adjust speed (higher = slower scroll)
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-black/30 p-8 text-left 
                  h-[400px] w-[400px] flex flex-col justify-between
                  cursor-pointer transition-transform duration-300 
                  hover:scale-105 hover:shadow-2xl"
              >
                {/* Reviewer */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md mb-3 border border-black/20"
                  />
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>

                {/* Quote */}
                <div className="flex flex-col justify-between flex-1">
                  <Quote className="w-8 h-8 text-purple-300 mb-4" />
                  <p className="text-gray-700 text-base leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;