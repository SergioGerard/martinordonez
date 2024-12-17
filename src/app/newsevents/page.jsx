import BlurFade from "@/components/magicui/blur-fade";
import CardSection from "@/components/card-section";
import { HeroSection } from "@/components/hero-section";
import BlogPostFilter from "@/components/filter";
import { getBlogPosts } from "@/data/blog";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
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
        <BlogPostFilter posts={posts} />
      </section>
    </main>
  );
}
