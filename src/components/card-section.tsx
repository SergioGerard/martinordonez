import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BlurFade from "./magicui/blur-fade"
import { Badge } from "./ui/badge";

const BLUR_FADE_DELAY = 0.04;

const cards = [
  {
    id: 1,
    title: "Congratulations to Jan Hammer",
    description: "Achieving a PhD is not merely the culmination of years of research; it’s the mastery of perseverance, the pursuit of knowledge, and the embodiment of resilience in the face of complexity. Congratulations Dr. Jan Hammer!",
    image: "/grad1.png?height=200&width=300",
    date: "09/24/2024",
    badge: "Graduation",
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "Master the art of creating beautiful mobile interfaces.",
    image: "/fondocard.png?height=200&width=300",
    date: "09/24/2024",
    badge: "News",
  },
  {
    id: 3,
    title: "Data Science",
    description: "Dive into the world of data analysis and machine learning.",
    image: "/fondocard.png?height=200&width=300",
    date: "09/24/2024",
    badge: "Journal",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Protect digital assets and learn about ethical hacking.",
    image: "/fondocard.png?height=200&width=300",
    date: "09/24/2024", 
    badge: "Blog",
  },
]

export default function CardSection() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 3}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card key={card.id} className="border flex flex-col overflow-hidden transition-colors hover:border-primary">
              <CardHeader className="p-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <Badge>{card.badge}</Badge>
                <CardTitle className="text-base text-foreground mb-2 mt-2">{card.title}</CardTitle>
                <p className="font-sans text-xs mb-2">{card.date}</p>
                <CardDescription className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert line-clamp-3">{card.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      </BlurFade>
  )
}