"use client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Call or WhatsApp",
    lines: ["+234 806 029 1061"],
  },
  {
    icon: <BsSendFill />,
    title: "Email us",
    lines: [
      "enquiries@justiwaytravelandtours.com",
      "contact@justiwaytravelandtours.com",
    ],
  },
  {
    icon: <FaLocationDot />,
    title: "Visit us",
    lines: ["Chief Shittu Saka Musa Street, Ilaje, Lagos State"],
  },
];

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Thank you! We will get back to you shortly.");
        form.reset();
      } else {
        toast.error("Sorry, we could not send your message. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        image="/images/waltz.jpg"
        alt="Two women walking together on a city street"
        title="Let's Plan Your Trip"
        subtitle="Tell us where you want to go and who is coming. We will take it from there."
        crumb="Contact"
        position="48% 40%"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          eyebrow="Get in touch"
          title="We'd love to hear from you"
          subtitle="Questions about a tour, a safety concern, or a trip you want us to design? Send a message and a member of our team will reply."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {info.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-mint text-white">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line} className="break-words text-sm text-ink/70">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-ink/5 bg-white p-6 shadow-md sm:p-8 lg:col-span-3"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Which tour or destination are you interested in? How many of you are travelling?"
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-gradient-to-r from-brand to-mint px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:from-brand-dark hover:to-mint-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
