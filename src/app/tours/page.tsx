"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFemale } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { packages } from "../../../packagesData";

export default function ToursPage() {
  const [active, setActive] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(packages.map((p) => p.category)))],
    []
  );
  const visible =
    active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        image="/images/toursimg.jpg"
        alt="A woman relaxing on a boat surrounded by green cliffs"
        title="Women-Only Tour Packages"
        subtitle="Small groups, vetted guides and 24/7 support, on trips planned around your comfort."
        crumb="Tours"
        position="50% 30%"
      />

      <section className="mx-auto max-w-4xl px-4 pt-16 text-center">
        <p className="text-lg leading-relaxed text-ink/75">
          Whether you want to relax on a sun-drenched beach, wander historic
          cities, celebrate a milestone with your girls or take your first solo
          trip, you will travel in a small group of women. Every package
          follows our{" "}
          <Link
            href="/safety"
            className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark"
          >
            Safety Promise
          </Link>
          .
        </p>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Find your trip"
            title="Our Women-Only Tour Packages"
          />

          <div
            className="mb-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter packages by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? "bg-gradient-to-r from-brand to-mint text-white shadow-md"
                    : "bg-white text-ink/70 shadow-sm hover:text-brand hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            <AnimatePresence mode="popLayout">
              {visible.map((pkg, i) => (
                <motion.article
                  key={pkg.id}
                  layout
                  className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className={`relative overflow-hidden ${pkg.heightClass}`}>
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand backdrop-blur">
                      {pkg.category}
                    </span>
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">
                      <FaFemale /> Women-only
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink/70">
                      {pkg.description}
                    </p>
                    <p className="mt-4 flex items-start gap-2 rounded-xl bg-mint/15 p-3 text-sm font-medium text-teal-800">
                      <MdOutlineHealthAndSafety className="mt-0.5 shrink-0 text-lg" />
                      {pkg.safety}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-mint px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:from-brand-dark hover:to-mint-dark hover:shadow-lg"
                    >
                      {pkg.book}
                      <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
