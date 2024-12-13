"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="About"
          subtitle="The"
          accent=" Canada Research Chair "
          subtitle2="in Power Converters for Renewable Energy"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="news-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16">
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <Image
                src="/imageabout/canada-research-chair.png?height=400&width=600"
                alt="About us canada research chair"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
            <h2 className="text-foreground text-xl font-bold mb-4">Canada Research Chair in Power Converters for Renewable Energy Systems</h2>
              <p className="text-muted-foreground mb-4">
              Dr. Martin Ordonez was appointed Canada Research Chair in Power Converters for Renewable Energy Systems in 2014. His research aims to improve the ability to maximize energy from renewable energy sources through the development of efficient and high-performance power conversion systems. The development of innovative converters and controllers is of paramount importance for the implementation of flexible and robust energy systems for diverse applications. Ordonez’s line of research is fundamental to encourage the use of renewable energy as a reliable and dynamic resource for consumers in Canada and around the world.
              </p>
              <a href="https://pm.forestry.ubc.ca/about/student-life-vancouver/" className="text-blue-500 hover:underline">
                Faculty of Forestry
              </a>
            </div>
          </div>
        </div>
        </BlurFade>
      </section>
    </main>
  );
}
