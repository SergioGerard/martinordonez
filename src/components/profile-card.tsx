import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { X, Linkedin,} from "lucide-react"

export default function ProfileCard() {
  return (
    <Card className="w-[200px] overflow-hidden border">
      <CardContent className="p-6 flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">Jane Doe</h2>
          <p className="text-sm text-muted-foreground">Software Engineer</p>
        </div>
        <div className="flex space-x-2">
          <Button size="icon" variant="outline">
            <X className="h-4 w-4" />
            <span className="sr-only">X</span>
          </Button>
          <Button size="icon" variant="outline">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}