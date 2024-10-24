import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cardData = [
  {
    image: "/research-development-images/advanced-controllers.png?height=200&width=300",
    title: "Advanced controllers",
    description: "Digital non-linear control strategies that enable intelligent power conversion.",
    link: "/research-development/advanced-controllers"
  },
  {
    image: "/research-development-images/renewable-energy-system.png?height=200&width=300",
    title: "Renewable Energy systems",
    description: "Special power converters and advanced algorithm enable the cost-effective adoption of renewable energy.",
    link: "/research-development/renewable-energy-systems"
  },
  {
    image: "/research-development-images/ev-battery-chargers.png?height=200&width=300",
    title: "EV Battery Chargers",
    description: "High-efficiency miniaturized battery chargers for new generation electric vehicles.",
    link: "/research-development/ev-battery-chargers"
  },
  {
    image: "/research-development-images/conversion-efficiency.png?height=200&width=300",
    title: "Conversion Efficiency",
    description: "Rapid power loss estimation in complex topologies for optimum converter design.",
    link: "/research-development/conversion-efficiency"
  },
  {
    image: "/research-development-images/magnetics.png?height=200&width=300",
    title: "Planar Magnetics",
    description: "State-of-the-art advanced magnetics design for complex power converters.",
    link: "/research-development/magnetics"
  }
]

export default function ResearchDevelopmentSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {cardData.map((card, index) => (
          <Card key={index} className="overflow-hidden flex flex-col justify-between">
            <div>
                <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-48 object-contain"
                />
                <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
            </div>
            <div>
                <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                    <a href={card.link}>Learn More</a>
                </Button>
                </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}