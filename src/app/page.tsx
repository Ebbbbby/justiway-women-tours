"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Card from "@/cards/Card";
import ContinentPage from "./continents/page";
import Testimonial from "@/testimonial/Testimonial";
import SectionHeading from "@/components/SectionHeading";

// `position` is the CSS object-position that keeps each photo's subject in frame.
const slides = [
  {
    title: "Travel the World. Women First.",
    text: "Justiway designs safe, women-only tours led by vetted guides, so you can explore with confidence and company you trust.",
    button: "Explore Tours",
    href: "/tours",
    image: "/images/travelady.png",
    position: "50% 25%",
  },
  {
    title: "Your Safety Isn't an Add-On",
    text: "Screened hotels, verified transfers and 24/7 support come standard on every trip. Read exactly what we promise.",
    button: "Our Safety Promise",
    href: "/safety",
    image: "/images/waltz.jpg",
    position: "48% 40%",
  },
  {
    title: "Go Solo, Never Alone",
    text: "Join a small group of like-minded women and see the world together, from island escapes to cultural city breaks.",
    button: "Find Your Trip",
    href: "/tours",
    image: "/images/toursimg.jpg",
    position: "50% 30%",
  },
];

const trust = [
  { icon: <FaUsers />, label: "Women-only groups" },
  { icon: <FaUserCheck />, label: "Vetted guides" },
  { icon: <MdOutlineHealthAndSafety />, label: "24/7 support" },
];

const SLIDE_MS = 6000;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  // Re-armed on every slide change so a manual click restarts the timer.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-108px)] lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-12">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink shadow-sm">
              <FaStar className="text-accent" /> Women-only tours from Lagos
            </span>

            <div className="min-h-[14rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl xl:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70 lg:mx-0">
                    {slide.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-2 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={slide.href}
                className="inline-block rounded-full bg-gradient-to-r from-brand to-mint px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-dark hover:to-mint-dark hover:shadow-xl"
              >
                {slide.button}
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-ink/15 px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:border-brand hover:text-brand"
              >
                Talk to Us
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {trust.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-sm font-semibold text-ink/80"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-accent shadow-sm">
                    {t.icon}
                  </span>
                  {t.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center gap-2 lg:justify-start">
              {slides.map((s, index) => (
                <button
                  key={s.title}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show slide ${index + 1}: ${s.title}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-10 bg-brand"
                      : "w-2.5 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-ink shadow-2xl ring-8 ring-white lg:max-w-[500px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority
                    // Landscape photos are cropped into a portrait arch, so the
                    // browser needs the image ~1.5x wider than the box itself.
                    sizes="(max-width: 1024px) 170vw, 940px"
                    quality={90}
                    className="object-cover"
                    style={{ objectPosition: slide.position }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Warm the other slides through the image optimizer (same
                sizes/quality as the visible one) so crossfades never flash. */}
            <div className="hidden" aria-hidden="true">
              {slides.map(
                (s, i) =>
                  i !== currentSlide && (
                    <Image
                      key={s.image}
                      src={s.image}
                      alt=""
                      fill
                      loading="eager"
                      sizes="(max-width: 1024px) 170vw, 940px"
                      quality={90}
                    />
                  )
              )}
            </div>

            <motion.div
              className="absolute -left-2 bottom-16 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex lg:-left-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-mint text-white">
                <FaUsers />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">Women-only</p>
                <p className="text-xs text-ink/60">Every departure</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-24 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex lg:-right-6"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-xl text-white">
                <MdOutlineHealthAndSafety />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">24/7 support</p>
                <p className="text-xs text-ink/60">Door to door</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <SectionHeading
            eyebrow="Who we are"
            title="Travel Built Around Women"
            subtitle="Justiway Travel & Tours is a Lagos-based travel company created for women. Every tour is women-only, every guide and partner is vetted, and every itinerary is planned with safety, comfort and fun in mind. Whether you are travelling solo, with friends or celebrating a milestone, you will be in good company."
          />
        </div>
      </section>

      <Card />
      <ContinentPage />
      <Testimonial />

      <section id="get-started" className="px-4 py-16">
        <motion.div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-mint p-10 text-center text-white shadow-2xl md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-accent/30 blur-2xl" />
          <h2 className="relative font-display text-3xl font-semibold md:text-5xl">
            Your next adventure is waiting
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">
            Pick a women-only tour, or tell us where you dream of going and we
            will plan it with you.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/tours"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-brand shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse Tours
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/60 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
