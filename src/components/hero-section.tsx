import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  subtitle2: string;
  buttonText?: string;
  accent: string;
  showButton?: boolean;
}

export function HeroSection({ title, subtitle, subtitle2, accent, buttonText, showButton = true }: HeroSectionProps) {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3}>
      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg bg-background pt-20 ps-20 pe-20">
        <AnimatedGridPattern
          numSquares={200}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          width={40}
          height={40}
          className={cn(
            "[mask-image:radial-gradient(ellipse_600px_300px_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[160%]"
          )}
        />
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center max-w-4xl flex-1 space-y-4 text-center md:text-left mb-8 md:mb-0">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-semibold text-center">{title}</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center">
                {subtitle}<span className="text-blue-600">{accent}</span>{subtitle2}
              </h1>
            </BlurFade>
            {showButton && buttonText && (
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  {buttonText}
                </Button>
              </BlurFade>
            )}
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
