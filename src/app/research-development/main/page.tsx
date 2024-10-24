"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import ResearchDevelopmentSection from "@/components/research-development-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Research & Development"
          subtitle="Welcome to"
          accent=" Research & Development "
          subtitle2="here are our best developments"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <ResearchDevelopmentSection />
        </BlurFade>
      </section>
    </main>
  );
}
