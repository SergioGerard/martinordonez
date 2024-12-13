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
          subtitle=""
          accent="Fred Kaiser Chair "
          subtitle2=" in power conversion and sustainability"
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
                src="/imageabout/kaiser-chair-about.png?height=400&width=600"
                alt="About us Fred Kaiser Chair"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
            <h2 className="text-foreground text-xl font-bold mb-4">Fred Kaiser Chair in Power Conversion and Sustainability</h2>
              <p className="text-muted-foreground mb-4">
              Usage of fossil fuels for applications such as energy generation results in environmental and health concerns all across the globe. Advances in power conversion, generation and efficiency are fundamental for the continuous development of our society to minimize the impact on the environment and public health. The next generation of power engineers face the challenge of providing solutions for the future of sustainable energy systems.
              </p>
              <p className="text-muted-foreground mb-4">
              In 2023, Dr. Martin Ordonez was awarded the Fred Kaiser Chair in Power Conversion and Sustainability supported by the Fred Kaiser Foundation for Higher Education. The Fred Kaiser Chair incentivizes studies to enable inclusion of renewable energy generation as an integral part of the future energy systems, thus addressing sustainability challenges. The addition of top-tier researchers to Dr. Ordonez’s already successful lab team enables further investigation on topics that are fundamental for the development of the field, which include power density, cost, efficiency, system optimization, modulation and control, thermal management and cooling, devices selection and topologies. The Fred Kaiser Chair activities increases the impact of UBC in the energy systems field, especially by producing tangible results for industries focused on energy and power conversion.
              </p>
              <a href="https://www.flickr.com/photos/ubcpublicaffairs/" className="text-blue-500 hover:underline">
                UBC Public Affairs
              </a>
            </div>
          </div>
        </div>
        </BlurFade>
      </section>
    </main>
  );
}
