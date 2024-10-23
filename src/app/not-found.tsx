"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, Wifi } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Animated circuit board background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
            <path
              d="M2 2 L48 2 M2 2 L2 48"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="z-10 text-center space-y-8 p-4">
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4 animate-pulse">
          4<span className="text-primary">0</span>4
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
          Oops! It seems like the page you're looking for has been lost in the
          digital void.
        </p>
        <div className="flex justify-center space-x-4">
          <Cpu className="w-8 h-8 text-primary animate-spin" />
          <Wifi className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <Link href="/" className="inline-block">
          <Button variant="outline" size="lg" className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Homepage
          </Button>
        </Link>
      </div>

      {/* Glitch effect */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="glitch-effect"></div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
          }
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: "404";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12rem;
          font-weight: bold;
          opacity: 0.1;
          pointer-events: none;
        }

        .glitch-effect::before {
          animation: glitch 2s infinite;
          color: var(--primary);
          z-index: -1;
        }

        .glitch-effect::after {
          animation: glitch 3s infinite;
          color: var(--secondary);
          z-index: -2;
        }
      `}</style>
    </div>
  )
}