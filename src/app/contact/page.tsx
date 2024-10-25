"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section
        id="hero-section"
        className="-mt-20 w-full flex items-start justify-center"
      >
        <HeroSection
          title="Contact"
          subtitle="Connect with"
          accent=" Martín Ordonez "
          subtitle2="at UBC, Vancouver"
          buttonText="Discover More"
          showButton={false}
        />
      </section>
      <section id="contact-section" className="w-full bg-background !-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="w-full border p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    <h3 className="font-semibold">
                      Electrical and Computer Engineering
                    </h3>
                    <p>The University of British Columbia</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 mt-0.5 text-muted-foreground" />
                    <p>
                      2332 Main Mall - Kaiser Building
                      <br />
                      Vancouver, BC
                      <br />
                      Canada V6T 1Z4
                    </p>
                  </div>
                  <Separator className="border my-3"/>
                  <div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <p>Office: 3044</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <p>+1 (604) 827-1423</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <p>ordonez.powerlab@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="w-full h-64 md:h-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
            <Card className="w-full mt-8 overflow-hidden border">
              <div className="sm:flex">
                <div className="sm:w-full md:w-1/3 h-48 sm:h-auto">
                  <img
                    src="/contact/we-hiring.jpg?height=300&width=400"
                    alt="Job opportunity at Martin Ordonez Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div id="recruiting" className="sm:w-full md:w-2/3 py-8 px-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">We're Recruiting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Martin Ordonez Lab is currently looking for talented individuals with experience in power electronics and/or
                      renewable power who are interested in pursuing a Master's degree, PhD or postdoctoral research at the UBC
                      Power Lab.
                    </p>
                    <p className="mb-4">
                      If you are interested in Martin Ordonez Lab, please apply through our new recruiting platform by clicking
                      the button below. You will have access to all our current openings and you will receive a confirmation email
                      right after applying.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <Button className="w-full sm:w-auto">Apply Now</Button>
                    <p className="text-sm text-muted-foreground">
                      If you also wish to make a formal application to UBC Electrical and Computer Engineering Department, please
                      use the University website.
                    </p>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
