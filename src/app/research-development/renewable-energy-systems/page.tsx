"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import DevelopmentArticle from "@/components/development-article";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

  const cards = [
    {
      imageSrc: "/research-development-images/renewable-energy-systems/bullet-control.png?height=200&width=400",
      imageAlt: "Improved Energy Harvesting",
      title: "Improved Energy Harvesting",
      description: "Novel algorithm and model development to improve solar, wind and tidal energy harvesting under fluctuating environmental conditions."
    },
    {
      imageSrc: "/research-development-images/renewable-energy-systems/bullet-balance.png?height=200&width=400",
      imageAlt: "Intelligent Control",
      title: "Intelligent Control",
      description: "Development of smart control algorithms for converter and system level devices that interfaces distributed generation, energy users and storage."
    },
    {
      imageSrc: "/research-development-images/renewable-energy-systems/bullet-optimal.png?height=200&width=400",
      imageAlt: "System Optimization",
      title: "System Optimization",
      description: "Optimal system design and operation strategies focussing on distributed generation, energy storage and islanded/grid-tied operation."
    }
  ];


  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Renewable Energy Systems"
          subtitle="Special power"
          accent=" converters "
          subtitle2="and advanced algorithms"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DevelopmentArticle
          mainTitle="Optimum Conversion"
          mainDescription="Special power converters and advanced algorithms enable the cost-effective adoption of renewable energy."
          mainImageSrc="/research-development-images/renewable-energy-systems/board-solar.png?height=400&width=400"
          mainImageAlt="Renewable Energy System Board"
          secondImageSrc="/research-development-images/renewable-energy-systems/board-subtopic.png?height=400&width=800"
          secondImageAlt="Subtopic Board"
          secondTitle="Advanced Algorithms"
          secondDescription="Real time execution of control and optimization algorithms using digital signal processors for a new generation of power conversion."
          cardData={cards}
        />
        </BlurFade>
      </section>
    </main>
  );
}
