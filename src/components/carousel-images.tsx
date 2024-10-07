"use client"

import React, { useCallback, useEffect, useState } from 'react'
import Image from "next/image"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Card, CardContent } from "@/components/ui/card"

type PropType = {
  slides: number
  options?: EmblaOptionsType
}

const EmblaInfiniteCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1, stopOnMouseEnter: true})]
  )
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: slides }).map((_, index) => (
            <div key={index} className="flex-[0_0_55%] sm:flex-[0_0_35%] md:flex-[0_0_25%] min-w-0 pl-4">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="relative aspect-square w-full transition-all duration-300 ease-in-out transform hover:scale-150">
                    <Image
                      src={`/carouselfot/fot${(index % 9) + 1}.png`}
                      alt={`Image ${(index % 9) + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
    </div>
  )
}

export default EmblaInfiniteCarousel