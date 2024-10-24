"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import DevelopmentArticle from "@/components/development-article";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

  const cards = [
    {
      imageSrc: "/research-development-images/conversion-efficiency/bullet-efficiency.png?height=200&width=400",
      imageAlt: "Improved Efficiency",
      title: "Improved Efficiency",
      description: "In-depth knowledge of circuit and component behaviour lead to smarter design choices and improved efficiency."
    },
    {
      imageSrc: "/research-development-images/conversion-efficiency/bullet-thermal.png?height=200&width=400",
      imageAlt: "Improved Thermal Management",
      title: "Improved Thermal Management",
      description: "Lighter and more efficient thermal management design can be obtained when power losses are determined accurately."
    },
    {
      imageSrc: "/research-development-images/conversion-efficiency/bullet-power-loss.png?height=200&width=400",
      imageAlt: "Improved Power Loss Estimation",
      title: "Improved Power Loss Estimation",
      description: "The detailed characterization of power electronic devices allows for an improvement in power loss estimation when compared to traditional techniques."
    }
  ];


  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Conversion efficiency"
          subtitle=""
          accent=" Efficient Power Conversion "
          subtitle2="Rapid power loss estimation in complex topologies"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DevelopmentArticle
          mainTitle="Efficient Power Conversion"
          mainDescription="Rapid power loss estimation in complex topologies for optimum converter design."
          mainImageSrc="/research-development-images/conversion-efficiency.png?height=400&width=400"
          mainImageAlt="Conversion Efficiency Board"
          secondImageSrc="/research-development-images/conversion-efficiency/heat-pc.png?height=400&width=800"
          secondImageAlt="Heat PC"
          secondTitle="Semiconductor Losses"
          secondDescription="Accurate and timely determination of semiconductor losses and thermal management requirements."
          cardData={cards}
        />
        </BlurFade>
      </section>
    </main>
  );
}
