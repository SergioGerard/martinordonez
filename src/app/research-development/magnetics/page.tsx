"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import DevelopmentArticle from "@/components/development-article";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

  const cards = [
    {
      imageSrc: "/research-development-images/planar-magnetics/bullet-lower-profile.png?height=200&width=400",
      imageAlt: "Compact Platform",
      title: "Compact Platform",
      description: "Low Profile Magnetics allow for light and slick converters, since the volume demanded is decreased and heat dissipation is improved."
    },
    {
      imageSrc: "/research-development-images/planar-magnetics/bullet-thermal.png?height=200&width=400",
      imageAlt: "Improved Thermal Modelling",
      title: "Improved Thermal Modelling",
      description: "Finite Element Analysis (FEM) allows for improved thermal modelling of magnetics and optimization in the selection of heat dissipation techniques."
    },
    {
      imageSrc: "/research-development-images/planar-magnetics/bullet-wireless.png?height=200&width=400",
      imageAlt: "Wireless Power Transmission",
      title: "Wireless Power Transmission",
      description: "Transmission of electrical energy wirelessly using compact and high-power magnetics will allow for improved and reliable vehicle charging on-the-go."
    }
  ];


  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Planar Magnetics"
          subtitle="State-of-the-art advanced"
          accent=" magnetics "
          subtitle2="design for complex power converters."
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DevelopmentArticle
          mainTitle="Planar Magnetics"
          mainDescription="State-of-the-art advanced magnetics design for complex power converters."
          mainImageSrc="/research-development-images/magnetics.png?height=400&width=400"
          mainImageAlt="Planar Magnetics Board"
          secondImageSrc="/research-development-images/planar-magnetics/subtopic-magnet.png?height=400&width=800"
          secondImageAlt="Magnetics subtopic boards"
          secondTitle="Planar Transformers"
          secondDescription="Accurate design of magnetics is possible using Finite Element Analysis (FEM)."
          cardData={cards}
        />
        </BlurFade>
      </section>
    </main>
  );
}
