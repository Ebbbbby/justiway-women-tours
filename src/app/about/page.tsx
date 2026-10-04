"use client";

import OurActivities from "@/ouractivities/OurActivities";
import OurStory from "@/ourstory/OurStory";
import OurVision from "@/ourvision/OurVision";
import PageHero from "@/components/PageHero";
export default function AboutPage() {
  return (
    <div>
      <PageHero
        image="/images/waltz.jpg"
        alt="Two women exploring a city together"
        title="About Us"
        subtitle="A women-first travel company, built on trust."
        crumb="About Us"
        position="48% 40%"
      />
      <div>
        <OurStory />
      </div>
      <div>
        <OurVision />
      </div>
      <div>
        <OurActivities />
      </div>
    </div>
  );
}
