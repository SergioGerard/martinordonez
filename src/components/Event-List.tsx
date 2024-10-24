import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import { events } from "@/data/data-events"  

export default function EventList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="overflow-hidden flex flex-col border hover:border-foreground">
            <CardHeader className="bg-foreground text-primary-foreground p-4">
              <div className="flex items-center text-sm mb-2">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {event.date}
              </div>
              <CardTitle className="text-xl">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{event.mainTopic}</h3>
              <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2">
                <div>
                  <strong className="text-sm">Speaker{event.speakers.length > 1 ? 's' : ''}:</strong>
                  <p className="text-sm">{event.speakers.join(", ")}</p>
                </div>
                <div>
                  <strong className="text-sm">Organization:</strong>
                  <p className="text-sm">{event.organization}</p>
                </div>
                {event.sponsor && (
                  <div>
                    <strong className="text-sm">Sponsor:</strong>
                    <p className="text-sm">{event.sponsor}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}