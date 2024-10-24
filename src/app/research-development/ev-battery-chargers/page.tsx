"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import DevelopmentArticle from "@/components/development-article";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

  const cards = [
    {
      imageSrc: "/research-development-images/ev-battery-chargers/bullet-region-operation.png?height=200&width=400",
      imageAlt: "Extended Region of Operation",
      title: "Extended Region of Operation",
      description: "Contrasting with usual battery chargers, the developed models regulate the output voltage in a wider range under different loading conditions."
    },
    {
      imageSrc: "/research-development-images/ev-battery-chargers/bullet-battery.png?height=200&width=400",
      imageAlt: "Improved Output Quality",
      title: "Improved Output Quality",
      description: "By eliminating discontinuous charging mode and providing higher quality charging current, the life cycle of batteries is increased, and a noise-free environment for reliable battery management system (BMS) operation is achieved."
    },
    {
      imageSrc: "/research-development-images/ev-battery-chargers/bullet-power-density.png?height=200&width=400",
      imageAlt: "Increased Power Density",
      title: "Increased Power Density",
      description: "Elimination of auxiliary circuits, lower conduction and switching losses, and reduced passive elements allow for smaller boards which transfer the same amount of power."
    }
  ];


  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="E.V. Battery Chargers"
          subtitle="Nextgen High-efficiency ultra compact battery"
          accent=" Chargers"
          subtitle2=""
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DevelopmentArticle
          mainTitle="Nextgen Chargers"
          mainDescription="High-efficiency ultra compact battery chargers for new generation electric vehicles."
          mainImageSrc="/research-development-images/ev-battery-chargers/ev-battery-chargers.png?height=400&width=400"
          mainImageAlt="EV Battery Chargers"
          secondImageSrc="/research-development-images/ev-battery-chargers/power-supply-subtopic.png?height=400&width=800"
          secondImageAlt="Subtopic Board"
          secondTitle="Power Supply Architectures"
          secondDescription="Simple but precise modifications to well-known topologies allows for new architectures capable of improving battery charging for EV applications."
          cardData={cards}
        />
        </BlurFade>
      </section>
    </main>
  );
}
