"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import {
  FaCar,
  FaHotel,
  FaMapMarkedAlt,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import ChoiceCard from "@/components/ChoiceCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const promises = [
  {
    title: "Women-only departures",
    description:
      "Every Justiway tour is exclusively for women. Groups are kept small so no one is lost in a crowd and everyone is known by name.",
    icon: <FaUsers />,
  },
  {
    title: "Vetted guides and partners",
    description:
      "Guides, drivers and local hosts are checked before we work with them and briefed on our conduct and safety standards. Anyone who falls short is removed from our roster.",
    icon: <FaUserCheck />,
  },
  {
    title: "Screened accommodation",
    description:
      "We choose hotels for secure locations, well-lit entrances, working door locks and a reliable front desk. Where possible, we avoid isolated properties.",
    icon: <FaHotel />,
  },
  {
    title: "Verified transfers",
    description:
      "Airport pick-ups and local transport are arranged in advance with trusted drivers. You will know who is collecting you and how to recognise them before you travel.",
    icon: <FaCar />,
  },
  {
    title: "Safety-first itineraries",
    description:
      "We plan around daylight for busy or unfamiliar areas, brief you on local customs and dress norms, and explain which places to avoid and why.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "24/7 support",
    description:
      "From the day you book until you are home, you can reach a real person by phone or message, at any hour.",
    icon: <BiSupport />,
  },
];

const steps = [
  {
    title: "You reach us",
    text: "Call or message our 24/7 line. You will always get a human response, not an automated reply.",
  },
  {
    title: "We act first, ask later",
    text: "If you feel unsafe, we move you first: a new hotel, a new driver or an early flight home. Paperwork comes second.",
  },
  {
    title: "We follow up",
    text: "After every incident, we review what happened and, where a partner is at fault, we stop working with them.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function SafetyPage() {
  return (
    <div>
      <PageHero
        image="/images/waltz.jpg"
        alt="Two women travelling together"
        title="Our Safety Promise"
        subtitle="What we commit to on every Justiway trip, and what we do when something goes wrong."
        crumb="Safety Promise"
        position="48% 40%"
      />

      <section className="max-w-4xl mx-auto px-4 pt-16">
        <SectionHeading
          eyebrow="Our commitment"
          title="Safety is the product, not an add-on"
          subtitle="Many women still plan trips around fear: of the wrong hotel, the wrong driver, the wrong neighbourhood. Justiway exists to take that weight off you. Below is exactly what we promise, so you can hold us to it."
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {promises.map((p) => (
            <motion.div variants={item} key={p.title}>
              <ChoiceCard
                title={p.title}
                description={p.description}
                icon={p.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-blush/60 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading eyebrow="Our response" title="If something goes wrong" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#2137fc] to-[#50e3c2] text-white font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="leading-relaxed text-ink/70">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <SectionHeading eyebrow="No fine print" title="Our honesty clause" />
        <p className="text-lg leading-relaxed text-center text-ink/75">
          No trip anywhere in the world is completely risk-free, and we will
          never claim otherwise. What we can promise is that we plan carefully,
          tell you the truth about each destination, and stand with you if
          things do not go to plan. If you ever feel we have fallen short of
          this page, tell us at{" "}
          <a
            href="mailto:contact@justiwaytravelandtours.com"
            className="underline font-semibold text-brand"
          >
            contact@justiwaytravelandtours.com
          </a>{" "}
          and we will respond.
        </p>
      </section>

      <section className="text-center pb-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Ready to travel with us?</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tours"
            className="inline-block rounded-full bg-gradient-to-r from-brand to-mint px-7 py-3 font-semibold text-white shadow-lg hover:-translate-y-0.5 hover:from-brand-dark hover:to-mint-dark transition-all duration-300"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-brand px-7 py-3 font-semibold text-brand hover:bg-brand hover:text-white transition-all duration-300"
          >
            Talk to Us First
          </Link>
        </div>
      </section>
    </div>
  );
}
