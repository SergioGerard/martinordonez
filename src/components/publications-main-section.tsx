import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cardData = [
  {
    image: "/publications/journals.jpg?height=200&width=300",
    title: "Journals",
    description: "My journals contributions",
    link: "/publications/journals"
  },
  {
    image: "/publications/conferences.jpg?height=200&width=300",
    title: "Conferences",
    description: "My Conferences Participation",
    link: "/publications/conferences"
  },
  {
    image: "/publications/patents.jpg?height=200&width=300",
    title: "Patents",
    description: "High-efficiency miniaturized battery chargers for new generation electric vehicles.",
    link: "/rpublications/patents"
  },
]

export default function PublicationsMainSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card key={index} className="border hover:border-foreground overflow-hidden flex flex-col justify-between">
            <div>
                <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
                />
                <CardHeader className="p-4">
                <CardTitle className="text-center text-xl font-semibold">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-center">
                <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
            </div>
            <div>
                <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                    <a href={card.link}>Read More</a>
                </Button>
                </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}