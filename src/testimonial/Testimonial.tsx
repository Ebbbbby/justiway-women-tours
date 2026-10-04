"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Amaka Eze.",
    text: "Travelling to Greece with a group of women felt so safe and easy. The hotels, transfers and guide were all handled perfectly.",
    location: "Lagos, Nigeria",
    image: "/images/profile1.jpg",
  },
  {
    name: "Ngozi Okoro.",
    text: "I was nervous about my first solo trip. The 24/7 support and the other women on the tour made all the difference.",
    location: "Abuja, Nigeria",
    image: "/images/profile2.jpg",
  },
  {
    name: "Zainab Sule.",
    text: "My girls' getaway to Mauritius through Justiway was the best decision ever!",
    location: "Kano, Nigeria",
    image: "/images/profile3.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Testimonial = () => {
  return (
    <section id="reviews" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Kind words"
        title="What Our Travellers Say"
        subtitle="Real trips, real women, in their own words."
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="relative rounded-2xl border border-ink/5 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
          >
            <FaQuoteLeft className="absolute right-6 top-6 text-4xl text-accent/20" />
            <div className="mb-4 flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="mb-6 leading-relaxed text-ink/80">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-mint">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-ink">{testimonial.name}</h4>
                <p className="text-sm text-ink/60">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
