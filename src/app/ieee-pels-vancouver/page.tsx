"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import AboutCarousel from "@/components/about-carousel";
import EventList from "@/components/Event-List";

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
          accent=" IEEE PELS Vancouver "
          subtitle2="Power Electronics Chapter"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="news-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16">
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <AboutCarousel />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-foreground text-xl font-bold mb-4">IEEE Vancouver Power Electronics Chapter</h2>
              <p className="text-muted-foreground mb-4">
              The Vancouver Section of IEEE was originally established as a Section of the American Institute of Electrical Engineers (AIEE) in 1911, and is the second oldest Section in Canada. It is one of the largest Sections of the country, and currently has about 2200 active members, including over 300 students at UBC, BCIT and SFU. It serves the geographical region of British Columbia, with the exception of the Vancouver Island, which is served by the Victoria Section. In order to engage the local engineering community, the Section organizes tours and events, and hosts technical presentations and seminars on topics of current interest to professionals of the field. The 34 IEEE technical societies are represented by 15 technical Chapters, among which stands the Vancouver Power Electronics Chapter.
              </p>
              <p className="text-muted-foreground mb-4">
              In 2016, Dr. Martin Ordonez was elected the new chair of the IEEE Vancouver Power Electronics Chapter, alongside the vice-chairs Hamed Valipour and Francisco Paz. Ever since, the Chapter has organized several events in the power electronics area, including academic lectures, industrial tutorials, an international conference and an industry/academia series. Invited speakers from different countries have been welcomed to Vancouver to share their expertise in power electronics and renewable energy systems. In addition, the Chapter has hosted the seventh International Symposium on Power Electronics for Distributed Generation Systems (PEDG), bringing together 180 experts in power electronics to present the latest advancements in distributed generation. In recognition of the results obtained by the new Chapter leadership, the Small Technical Chapter Award was granted by the IEEE Vancouver Section at the 2017 IEEE Vancouver Annual General Meeting.
              </p>
              <div className="flex flex-col">
                <a href="https://vancouver.ieee.ca/about-ieee/" className="text-blue-500 pe-4 hover:underline">
                  About IEEE Vancouver Section
                </a>
                <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8030364" className="text-blue-500 hover:underline">
                  IEEE Vancouver Power Electronics Chapter Revitalized
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <EventList />
        </div>
        </BlurFade>
      </section>
    </main>
  );
}
