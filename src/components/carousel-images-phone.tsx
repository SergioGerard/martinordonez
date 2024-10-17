'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)
  const [hoverMobile, setHoverMobile] = useState(false)

  return (
    <div className="container mx-auto py-6 px-4 sm:py-12">
      <Card>
        <CardContent className="p-4 sm:p-6">
          {/* Mobile view (below sm breakpoint) */}
          <div className="sm:hidden flex justify-center">
            <div 
              className="relative w-64 h-64 transition-transform duration-300 ease-in-out"
              onMouseEnter={() => setHoverMobile(true)}
              onMouseLeave={() => setHoverMobile(false)}
            >
              <Image
                src="/carouselfot/fot1.png?height=256&width=256"
                alt="Center image for mobile"
                layout="fill"
                objectFit="cover"
                className={`rounded-lg shadow-xl ${hoverMobile ? 'scale-105' : ''}`}
              />
            </div>
          </div>

          {/* Desktop view (sm breakpoint and up) */}
          <div className="hidden sm:flex justify-center items-center gap-8 md:gap-8">
            <div 
              className="relative w-48 h-48 md:w-64 md:h-64 transition-transform duration-300 ease-in-out"
              style={{ transform: `rotate(${hoverLeft ? '0' : '-5'}deg)` }}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
            >
              <Image
                src="/carouselfot/fot1.png?height=256&width=256"
                alt="Left tilted image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div 
              className="relative w-48 h-48 md:w-64 md:h-64 transition-transform duration-300 ease-in-out"
              style={{ transform: `rotate(${hoverRight ? '0' : '5'}deg)` }}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
            >
              <Image
                src="/carouselfot/fot2.png?height=256&width=256"
                alt="Right tilted image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}