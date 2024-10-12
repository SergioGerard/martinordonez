// CardPublications.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { ExternalLink } from "lucide-react";
import { CalendarDays, Users, BookOpen, } from "lucide-react";

interface CardPublicationsProps {
  data: {
    codeNumber: string;
    description: string;
    link: string;
    authors: string;
    magazine: string;
    volumeInfo: string;
    date: string;
  }[];
}

export default function CardPublications({ data, }: CardPublicationsProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((card) => (
          <a
            key={card.codeNumber}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card key={card.codeNumber} className="border p-4 flex flex-col hover:border-foreground h-full">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <Badge variant="secondary" className="text-xs me-2 mb-4">
                    {card.codeNumber}
                </Badge>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2 mb-2">
                  <CardDescription className="text-sm text-foreground">{card.description}</CardDescription>
                </div>
                <Separator className="w-full border my-3" />
                <div className="flex items-center space-x-2 text-xs py-1">
                    <Users className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground line-clamp-2">{card.authors}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs py-1">
                    <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="flex flex-col justify-start">
                    <span className="font-medium line-clamp-1">{card.magazine}</span>
                    <span className="text-muted-foreground">{card.volumeInfo}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CalendarDays className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <time dateTime={card.date} className="text-muted-foreground">
                    {new Date(card.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
