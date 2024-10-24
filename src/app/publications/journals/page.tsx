"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import CardPublications from "@/components/card-publications";
import { journals } from "@/data/data-publications";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Journals"
          subtitle="Peer-reviewed "
          accent="  publications"
          subtitle2=" covering original research in my field."
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="team-section" className="w-full bg-background !-mt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="w-full flex items-center justify-center">
          <CardPublications data={journals} />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}