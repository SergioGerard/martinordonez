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
          accent=" Martin "
          subtitle2=" Ordonez, Ph.D., P.Eng."
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="news-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About of me
              </h2>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <Image
                src="/imageabout/me.png?height=400&width=600"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
            <h2 className="text-foreground text-xl font-bold mb-4">Dr. Martin Ordonez, Ph.D., P.Eng.</h2>
              <p className="text-muted-foreground mb-4">
              Dr. Martin Ordonez is a Professor and Canada Research Chair at the University of British Columbia (UBC), Vancouver, BC, Canada.
              </p>
              <p className="text-muted-foreground mb-4">
              He is also the Fred Kaiser Chair in Power Conversion and Sustainability at UBC. He was an adjunct Professor with Simon Fraser University in Canada, and Memorial University of Newfoundland.
              </p>
              <p className="text-muted-foreground mb-4">
              His industrial experience in power conversion includes Xantrex Technology Inc. now AMETEK Programmable Power in San Diego, California. Dr. Ordonez is an Editor and Associate Editor of various IEEE Journals.
              </p>
              <p className="text-muted-foreground">
              With the support of industrial funds and the Natural Sciences and Engineering Research Council, he has contributed to more than 150 publications and R&D reports.
              </p>
            </div>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="flex flex-col items-center text-center p-6">
              <QuoteIcon className="w-8 h-8 mb-4" />
              <blockquote className="text-xl italic mb-4">
                "We are powering change - working together with talented students, innovative industries, and supportive agencies to develop new technologies."
              </blockquote>
              <cite className="text-sm font-bold">- Martín Ordonez</cite>
            </CardContent>
          </Card>
        </div>
        </BlurFade>
      </section>
    </main>
  );
}
