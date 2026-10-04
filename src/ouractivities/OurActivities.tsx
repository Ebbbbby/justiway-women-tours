"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { activities } from "../../activitiesData";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function OurActivities() {
  const [selectedActivityId, setSelectedActivityId] = useState(
    activities[0].id
  );
  const selected = activities.find((a) => a.id === selectedActivityId)!;
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="py-16 mt px-4 sm:px-6 lg:px-8 bg-gray-50 text-ink ">
      <motion.h2
        className="text-2xl font-bold mb-4 text-ink text-center font-display font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Activities
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto text-ink">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activities.map((activity) => (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              key={activity.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedActivityId(activity.id)}
              className={`flex flex-col items-center justify-center gap-3  rounded-md cursor-pointer transition-all duration-300 shadow-sm ${
                selectedActivityId === activity.id
                  ? "bg-yellow-100 border border-yellow-500"
                  : "bg-white hover:bg-gray-100"
              }`}
              title={activity.name}
            >
              <Image
                src={activity.icon}
                alt={activity.name}
                width={50}
                height={50}
              />
              <span className="font-bold text-lg">{activity.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="p-4 shadow rounded-md"
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl font-bold mb-2 italics text-center tracking-wide">
            {selected.name}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            {selected.description}
          </p>
          <div className="mt-6 flex items-center justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-brand to-mint px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-brand-dark hover:to-mint-dark hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </motion.div>

        <motion.div
          className=" rounded-md shadow-md p-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hidden md:grid grid-cols-1 gap-4">
            {selected.images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-md"
              >
                <Image
                  src={img}
                  alt={`${selected.name} ${idx + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 rounded-md"
                />
              </motion.div>
            ))}
          </div>

          <div className="block md:hidden">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3500}
              dynamicHeight={false}
            >
              {selected.images.map((img, idx) => (
                <div key={idx}>
                  <Image
                    src={img}
                    alt={`${selected.name} ${idx + 1}`}
                    width={300}
                    height={200}
                    className="object-cover rounded-md h-48 w-full"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
