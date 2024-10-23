'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  { src: "/imageabout/ieee1.png", alt: "Image 1", description: "Grid Modernization - Paving the path for the future D. Jim Papadoulis and Valentina Dabic (BC Hydro)" },
  { src: "/imageabout/ieee2.png", alt: "Image 2", description: "Challenges and innovation opportunities for electrifying the transportation sector | Prof. Olivier Trescases (University of Toronto)" },
  { src: "/imageabout/ieee3.png", alt: "Image 3", description: "EnerSys developments in lithium-ion storage technologies Joern Tinnemeyer and Victor Goncalves (EnerSys)" },
  { src: "/imageabout/ieee4.png", alt: "Image 4", description: "Single Reference Six Pulse Modulation (SRSPM) for High-Frequency Pulsating DC Link Three-Phase Inverters | Dr. Akshay Kumar Rathore (Concordia University)" },
  { src: "/imageabout/ieee5.png", alt: "Image 5", description: "Safety Considerations for Electronics Development | Nicholas Dohmeier (Delta-Q Technologies)" },
  { src: "/imageabout/ieee6.png", alt: "Image 6", description: "Introduction to Embedded Software Development in Power Electronics | Jan Hammer (University of British Columbia)" },
  { src: "/imageabout/ieee7.png", alt: "Image 7", description: "Sustaingineering - Developing Student Talent and Sustainable Technology | Matthieu Amyotte (University of British Columbia)" },
  { src: "/imageabout/ieee8.png", alt: "Image 8", description: "Battery Health, Monitoring and Charging | Navid Shafiei (University of British Columbia)" },
  { src: "/imageabout/ieee9.png", alt: "Image 9", description: "Recent Innovations in Real-Time Simulation | Ramin Mirzahosseini (RTDS Technologies Inc.)" },
  { src: "/imageabout/ieee10.png", alt: "Image 10", description: "In-The-Loop Testing Of Power Electronic Systems | Kristofer Eberle (Plexim, Inc.)" },
  { src: "/imageabout/ieee11.png", alt: "Image 11", description: "Modulation Design for Improved Efficiency in Solar PV Converters | Emanuel Serban (Schneider Electric)" },
  { src: "/imageabout/ieee12.png", alt: "Image 12", description: "Islanded Microgrid Energy Management | Moein Manbachi (University of British Columbia)" },
  { src: "/imageabout/ieee13.png", alt: "Image 13", description: "Test Automation with LabVIEW | Jerry Wu (Alpha Technologies Ltd.)" },
]

export default function AboutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <Card className="m-2">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-1 bg-background">
                    <p className="text-sm text-muted-foreground text-center">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-5 -translate-y-3/2 z-10"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-5 -translate-y-3/2 z-10"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-1">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`w-2 h-2 rounded-full mx-1 p-0 ${
              index === selectedIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}