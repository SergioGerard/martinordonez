
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import BlogPage from "../blog/page";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero-section" className="-mt-20 w-full flex items-start justify-center">
        <HeroSection
            title="News & Events"
            subtitle="Discover my"
            accent=" News"
            subtitle2=" & Events"
            buttonText="Discover More"
            showButton={false}
        />
      </section>
      <section id="news-section" className="w-full bg-background">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16">
            <div className="space-y-2">
              <div className="flex justify-center gap-4">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  News
                  </div>
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Events
                  </div>
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Graduations
                  </div>
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blog
                  </div>
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                  </div>
              </div>
            </div>
          </div>
        </BlurFade>
        <BlogPage />
      </section>
    </main> 
  );
}
