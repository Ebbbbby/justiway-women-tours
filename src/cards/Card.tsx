import ChoiceCard from "@/components/ChoiceCard";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { FaCar, FaHotel, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const reasons = [
  {
    title: "Women-Only Groups",
    description:
      "Every departure is exclusively for women, so you can relax, be yourself and make friends fast.",
    icon: <FaUsers />,
  },
  {
    title: "Vetted Guides & Partners",
    description:
      "Guides, drivers and hosts are checked and briefed on our safety standards before they work with us.",
    icon: <FaUserCheck />,
  },
  {
    title: "Screened Stays",
    description:
      "Hotels are chosen for secure locations, well-lit surroundings and reliable front-desk service.",
    icon: <FaHotel />,
  },
  {
    title: "Verified Transfers",
    description:
      "Airport pick-ups and local transport are pre-arranged with trusted drivers, so no hailing strangers at night.",
    icon: <FaCar />,
  },
  {
    title: "24/7 Support",
    description:
      "A real person is reachable day or night from the moment you leave home until you land back.",
    icon: <BiSupport />,
  },
  {
    title: "Our Safety Promise",
    description:
      "See exactly what we commit to on every trip and how we handle it when things go wrong.",
    icon: <MdOutlineHealthAndSafety />,
    href: "/safety",
  },
];

export default function Card() {
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

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div id="why-justiway" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Justiway"
        title="Why Women Travel With Justiway"
        subtitle="Six commitments that come with every trip, not extras you pay for."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {reasons.map((reason) => {
          const card = (
            <ChoiceCard
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          );
          return (
            <motion.div variants={item} key={reason.title}>
              {reason.href ? <Link href={reason.href}>{card}</Link> : card}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
