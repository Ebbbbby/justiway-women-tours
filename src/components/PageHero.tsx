"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  crumb: string;
  /** CSS object-position, e.g. "50% 30%", keeps the subject in frame */
  position?: string;
}

export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  crumb,
  position = "50% 40%",
}: PageHeroProps) {
  return (
    <section className="relative h-[46vh] min-h-[340px] max-h-[520px] overflow-hidden text-white">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/25" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 rounded-full bg-white/15 px-4 py-1 text-sm backdrop-blur"
        >
          <Link href="/" className="font-semibold hover:underline">
            Home
          </Link>
          <span className="mx-2 opacity-70">/</span>
          <span className="text-mint font-semibold">{crumb}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-semibold leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 max-w-2xl text-lg text-white/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
