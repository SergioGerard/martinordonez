"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import DevelopmentArticle from "@/components/development-article";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {

  const cards = [
    {
      imageSrc: "/research-development-images/advanced-controllers/complex-simplicity-1.png?height=200&width=400",
      imageAlt: "Predictable Response",
      title: "Predictable Response",
      description: "By employing accurate modelling techniques, the converter response can be predicted, ensuring direct convergence towards the target."
    },
    {
      imageSrc: "/research-development-images/advanced-controllers/fast-reliability.png?height=200&width=400",
      imageAlt: "Fast Reliability",
      title: "Fast and Reliable",
      description: "Advanced control methods enable fast transient responses while maintaining a reliable operation."
    },
    {
      imageSrc: "/research-development-images/advanced-controllers/high-low-density.png?height=200&width=400",
      imageAlt: "High and Low Density",
      title: "Increased Power Density",
      description: "Advanced digital control enables size reduction on reactive components."
    }
  ];


  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Advanced Controllers"
          subtitle="Digital non-linear"
          accent=" control "
          subtitle2="strategies"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <DevelopmentArticle
          mainTitle="Novel Strategies"
          mainDescription="Digital non-linear control strategies that enable intelligent power conversion."
          mainImageSrc="/research-development-images/advanced-controllers.png?height=400&width=400"
          mainImageAlt="Advanced Controller Board"
          secondImageSrc="/research-development-images/advanced-controllers/advanced-1.jpg?height=400&width=800"
          secondImageAlt="Person watch graphs "
          secondTitle="High-Performance Control"
          secondDescription="State Plane controllers guarantee a fast, reliable and stable response to commands and external perturbations."
          cardData={cards}
        />
        </BlurFade>
      </section>
    </main>
  );
}
