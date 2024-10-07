"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { HeroSection } from "@/components/hero-section";
import CardSection from "@/components/card-section";
import EmblaInfiniteCarousel from "@/components/carousel-images";


const BLUR_FADE_DELAY = 0.04;

/* SECCION HERO PERO CON FOTO A LA DERECHA
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeroImage from "@/components/hero-image";

<section id="hero" className="w-full py-16 flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-4 text-center md:text-left mb-8 md:mb-0">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-semibold">Hey, I am Martin Ordonez</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            I strive for <span className="text-blue-600">power electronics</span> and renewable energy
          </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Learn More
          </Button>
          </BlurFade>
        </div>
        <HeroImage />
      </div>
    </section>*/

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero-section" className="-mt-7 w-full flex items-start justify-center">
        <HeroSection
          title="Hey, I am Martin Ordonez"
          subtitle="I strive for"
          accent=" power electronics"
          subtitle2=" and renewable energy"
          buttonText="Discover More"
        />
      </section>
      <section id="img-carousel-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <EmblaInfiniteCarousel slides={18} options={{ align: 'start' }} />
        </BlurFade>
      </section>
      <section id="news-section" className="w-full py-28 bg-background">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  News & Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check my latest news!
                </h2>
                <p className="text-muted-foreground px-8 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore my latest projects, achievements, and notable events. Stay informed about my contributions and upcoming activities in sustainable technology.
                </p>
              </div>
            </div>
          </BlurFade>
      <CardSection />
      </section>
      <section id="info">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold text-center">Renewable Energy Research & Development</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className=" prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert px-80 py-6">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
