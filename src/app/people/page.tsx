"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import TeamSection from "@/components/team-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Team"
          subtitle="Our best team of professional"
          accent=" Researches"
          subtitle2=""
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="team-section" className="w-full bg-background !-mt-10">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="w-full flex items-center justify-center">
            <TeamSection />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
