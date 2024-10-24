import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Definir la interfaz para los tipos de props
interface DevelopmentArticleProps {
  mainTitle: string;
  mainDescription: string;
  mainImageSrc: string;
  mainImageAlt: string;
  secondImageSrc: string;
  secondImageAlt: string;
  secondTitle: string;
  secondDescription: string;
  cardData: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
}

// Definir el componente utilizando las props con tipado
export default function DevelopmentArticle({
  mainTitle,
  mainDescription,
  mainImageSrc,
  mainImageAlt,
  secondImageSrc,
  secondImageAlt,
  secondTitle,
  secondDescription,
  cardData,
}: DevelopmentArticleProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          {/* Main Title and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">{mainTitle}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              {mainDescription}
            </p>
          </div>

          {/* Main Image */}
          <div className="mx-auto aspect-square max-w-sm overflow-hidden rounded-xl">
            <Image
              src={mainImageSrc}
              width={400}
              height={400}
              alt={mainImageAlt}
              className="object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="mx-auto overflow-hidden rounded-xl">
            <Image
              src={secondImageSrc}
              width={1200}
              height={600}
              alt={secondImageAlt}
              className="w-full object-cover"
            />
          </div>

          {/* Second Title and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter text-center sm:text-3xl md:text-4xl">{secondTitle}</h3>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              {secondDescription}
            </p>
          </div>

           {/* Cards */}
           <div className="grid gap-8 md:grid-cols-2">
            {/* First two cards */}
            {cardData.slice(0, 2).map((card, index) => (
              <Card key={index} className="border p-24 flex flex-col gap-8 justify-between bg-blue-900 dark:bg-background text-white dark:text-foreground">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={card.imageSrc}
                    width={600}
                    height={300}
                    alt={card.imageAlt}
                    className="w-full max-w-40 object-cover rounded-t-xl mb-8"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl font-bold text-center text-foreground">{card.title}</CardTitle>
                  <CardDescription className="mt-2 text-center text-base text-foreground">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}

            {/* Third card (Full width) */}
            <Card className="md:col-span-2 border p-24 flex flex-col gap-8 justify-between bg-blue-900 dark:bg-background text-white dark:text-foreground">
              <CardHeader className="flex flex-col items-center">
                <Image
                  src={cardData[2].imageSrc}
                  width={800}
                  height={300}
                  alt={cardData[2].imageAlt}
                  className="w-full max-w-xs object-cover rounded-t-xl mb-8"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-bold text-center text-foreground">{cardData[2].title}</CardTitle>
                <CardDescription className="mt-2 text-center text-base text-foreground">
                  {cardData[2].description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
