"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const featured = [
  {
    href: "/tours",
    title: "Women-Only Group Tours",
    text: "Small-group departures exclusively for women, led by trained trip leads.",
  },
  {
    href: "/contact",
    title: "Custom Girls' Trips",
    text: "Tailor-made trips for you and your friends, planned around your preferences and budget.",
  },
  {
    href: "/safety",
    title: "Our Safety Promise",
    text: "Vetted guides, screened stays, verified transfers and 24/7 support on every trip.",
  },
];

const details = [
  {
    title: "Flight Ticketing",
    image: "/images/plane.jpg",
    alt: "Aeroplane wing in flight",
    text: "We book flights that suit your plans and budget, with sensible arrival times so you are not landing alone at midnight in an unfamiliar city.",
  },
  {
    title: "Hotel Booking",
    image: "/images/reserve.jpg",
    alt: "Hotel reservation",
    text: "Every hotel is screened for secure locations, well-lit surroundings and reliable front-desk service, from budget-friendly stays to luxury retreats.",
  },
  {
    title: "Travel Insurance",
    image: "/images/insurance.jpg",
    alt: "Travel insurance",
    text: "Our insurance policies are designed to give you peace of mind, so you can enjoy your journey without worrying about unexpected events.",
  },
  {
    title: "Airport Transfers",
    image: "/images/transfers.jpg",
    alt: "Airport transfer",
    text: "Pre-arranged pick-ups with trusted drivers, so you never have to hail an unknown ride after a long flight.",
  },
  {
    title: "Travel Consultation",
    image: "/images/consult.jpg",
    alt: "Travel consultation",
    text: "Not sure where to go or whether a destination suits you? Talk to our team for honest advice on safety, culture, dress norms and what to expect before you book.",
  },
  {
    title: "Women-Only Group Planning",
    image: "/images/manage.jpg",
    alt: "Group trip planning",
    text: "Planning a trip for a friend group, a bridal party or a women's association? We handle the itinerary, bookings and logistics so you can enjoy the trip too.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <PageHero
        image="/images/services.jpg"
        alt="Travel services"
        title="Our Services"
        subtitle="Everything around your tour, planned with women's comfort and security in mind."
        crumb="Services"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="What we do"
          title="Safe, Seamless, Enjoyable"
          subtitle="Justiway makes travel safe, seamless and enjoyable for women. From the tours themselves to the flights, stays and transfers around them, nothing is an afterthought."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={f.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-ink/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-mint transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="font-display text-xl font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/70">{f.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Learn more
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Around your trip"
            title="Every Detail Covered"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {details.map((d, i) => (
              <motion.article
                key={d.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-2/5 sm:shrink-0">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{d.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gradient-to-r from-brand to-mint px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-dark hover:to-mint-dark hover:shadow-xl"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
