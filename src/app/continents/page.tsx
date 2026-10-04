"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { continents } from "../../../data";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const ContinentPage = () => {
  return (
    <section id="destinations" className="bg-blush/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Destinations"
          title="Where Will You Go Next?"
          subtitle="Each continent offers its own blend of culture, adventure and natural beauty. Pick one to see the destinations we travel to."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {continents.map((continent, index) => (
            <motion.div
              key={continent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/continents/${slugify(continent.name)}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image
                  src={continent.image}
                  alt={continent.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-2xl font-semibold">
                    {continent.name}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-snug text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {continent.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-mint">
                    Explore
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinentPage;
