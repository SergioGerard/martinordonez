import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe, Linkedin } from "lucide-react"

interface TeamMember {
  name: string
  occupation: string
  avatar: string
  globe: string
  linkedin: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    occupation: "Frontend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/alice",
    linkedin: "https://twitter.com/alice",
  },
  {
    name: "Bob Smith",
    occupation: "Backend Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/bob",
    linkedin: "https://twitter.com/bob",
  },
  {
    name: "Charlie Brown",
    occupation: "UI/UX Designer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/charlie",
    linkedin: "https://twitter.com/charlie",
  },
  {
    name: "Diana Ross",
    occupation: "Project Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/diana",
    linkedin: "https://twitter.com/diana",
  },
  {
    name: "Ethan Hunt",
    occupation: "DevOps Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/ethan",
    linkedin: "https://twitter.com/ethan",
  },
  {
    name: "Fiona Apple",
    occupation: "Data Scientist",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/fiona",
    linkedin: "https://twitter.com/fiona",
  },
  {
    name: "George Michael",
    occupation: "Mobile Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/george",
    linkedin: "https://twitter.com/george",
  },
  {
    name: "Hannah Montana",
    occupation: "QA Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/hannah",
    linkedin: "https://twitter.com/hannah",
  },
  {
    name: "Ian McKellen",
    occupation: "Systems Architect",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/ian",
    linkedin: "https://twitter.com/ian",
  },
  {
    name: "Julia Roberts",
    occupation: "Product Owner",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/julia",
    linkedin: "https://twitter.com/julia",
  },
  {
    name: "Kevin Bacon",
    occupation: "Security Specialist",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/kevin",
    linkedin: "https://twitter.com/kevin",
  },
  {
    name: "Lana Del Rey",
    occupation: "Full Stack Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    globe: "https://github.com/lana",
    linkedin: "https://twitter.com/lana",
  },
]

function TeamMember({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{member.occupation}</p>
          <div className="flex space-x-2">
            <a href={member.globe} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}