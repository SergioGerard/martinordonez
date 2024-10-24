"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";

const BLUR_FADE_DELAY = 0.04;

const courses = [
  {
    title: "ELEC451 Power Electronics",
    outline: [
      "Power quality, harmonic distortion, and power factor",
      "Characteristic of power semiconductor devices",
      "Line frequency rectifiers",
      "Buck, boost, and buck-boost DC-DC power converters",
      "Pulse Width Modulation (PWM) techniques",
      "Half-bridge and full-bridge topologies",
      "Single- and three-phase voltage source inverters",
      "Gate and base driving",
      "Basic magnetic devices",
      "Isolated power converters"
    ],
    link: "https://ece.ubc.ca/courses/elec-451/"
  },
  {
    title: "EECE550 Topics in Power Electronics Design",
    outline: [
      "Review of basic power converter topologies",
      "Power loss in power converters",
      "Converter dynamics and control (small-signal analysis)",
      "Inverters control",
      "Sliding mode control",
      "SRC and PRC resonant converters",
      "LLC resonant topology",
      "Phase shift full bridge ZVS",
      "Power Factor Corrector (PFC)"
    ],
    link: "https://ece.ubc.ca/courses/eece-550/"
  }
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Courses"
          subtitle="University of British Columbia"
          accent=" Courses "
          subtitle2="administered by Dr. Ordonez"
          buttonText="Discover More"
          showButton={false}
        />
      </section>

      {/* Courses Section */}
      <section id="courses-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-16 gap-16 mt-16">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Currently, I manage 2 courses
              </h2>
            </div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-lg border hover:border-foreground p-8">
                  <CardContent className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {course.title}
                      </h3>
                      <h4 className="text-lg font-medium mb-1">Course Outline</h4>
                      <ul className="list-disc list-inside mb-4 text-left">
                        {course.outline.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block px-4 py-2 text-center bg-primary text-background font-semibold rounded-md hover:bg-primary-dark transition"
                      >
                        View Course
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

