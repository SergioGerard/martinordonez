"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import { QuoteIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";

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
          subtitle="Dr."
          accent=" Susstaingineering "
          subtitle2=" Designing Sustainable Technology for Global Impact"
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
                src="/imageabout/ubc-team.png?height=400&width=600"
                alt="About of UBC Team"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto mb-2"
              />
              <p className="text-muted-foreground mb-8 text-center">
                UBC Team
              </p>
              <Image
                src="/imageabout/tec-team.png?height=400&width=600"
                alt="About of TEC Team"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto mb-2"
              />
              <p className="text-muted-foreground text-center">
                TEC Team
              </p>
            </div>
            <div className="w-full md:w-1/2">
            <h2 className="text-foreground text-xl font-bold mb-4">Sustaingineering</h2>
              <p className="text-muted-foreground mb-4">
              Sustaingineering is a student team that designs, develops and deploys sustainable technology solutions for renewable energy applications in remote and developing communities. Our goal is to create power solutions to address the global challenge of climate change and to improve the quality of life of the people living in these communities.
              </p>
              <p className="text-muted-foreground mb-4">
              Founded in 2014, by Dr. Martin Ordonez and a group of undergraduate students, Sustaingineering now comprises more than 60 members across two locations: the University of British Columbia and Technologico de Monterrey. They are currently engaged in multiple projects in multiple countries, such as solar water pumping in Nicaragua and solar-powered homes in Mexico. These international projects are made possible by generous sponsorship support from the Fred Kaiser Foundation and the Fred Kaiser Professorship.  By adopting an interdisciplinary approach, Sustaingineering brings together students from multiple engineering disciplines and different faculties to tackle real-world problems. This initiative allows undergraduate students to gain practical skills, while strengthening their sense of environmental and social responsibility.
              </p>
              <a href="https://www.sustaingineering.com/" className="text-blue-500 hover:underline">
                Sustaingineering Website
              </a>
            </div>
          </div>
        </div>
        </BlurFade>
      </section>
    </main>
  );
}
