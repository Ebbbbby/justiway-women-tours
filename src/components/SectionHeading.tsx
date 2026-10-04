"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      className={`max-w-3xl mb-10 ${alignment}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="inline-block mb-3 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold leading-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand to-mint ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
