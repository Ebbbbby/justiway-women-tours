"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const OurStory = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      imageRef.current?.getBoundingClientRect() || {};
    const x = ((e.clientX - (left || 0)) / (width || 1)) * 100;
    const y = ((e.clientY - (top || 0)) / (height || 1)) * 100;

    if (imageRef.current) {
      imageRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  };
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
  return (
    <div className="max-w-7xl mx-auto py-14 mt-6 px-4 sm:px-6 lg:px-8 text-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-md p-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold font-display font-semibold mb-4">Who We Are</h2>
        
          <p className="mb-4 text-lg leading-relaxed ">
            Justiway Travel & Tours was founded on a simple idea: women
            deserve to see the world without having to second-guess their
            safety. We build women-only tours in which every guide, hotel and
            transfer is chosen with that in mind, so you can focus on the
            adventure.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            We believe travel is about more than places. It is about
            confidence, friendship and the stories you bring home. Our team
            curates itineraries around the interests of our travellers and
            keeps them in company they trust from take-off to touchdown.
          </p>
        </motion.div>

        <div className="flex items-center justify-center">
          <motion.div
            ref={imageRef}
            className="w-96 overflow-hidden rounded-full transition-transform duration-500 ease-out hover:scale-105 shadow-xl hover:shadow-2xl"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.3,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/justiway.png"
              alt="About Us"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
