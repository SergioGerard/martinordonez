import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Globe, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  occupation: string;
  avatar: string;
  globe: string;
  linkedin: string;
  category: "PInvestigator" | "Research" | "Support";
}

const teamMembers: TeamMember[] = [
  {
    name: "Martín Ordonez",
    occupation: "Canada Research Chair Professor, UBC",
    avatar: "/imageabout/me.png?height=100&width=100",
    globe: "https://martinordonez.com",
    linkedin: "https://www.linkedin.com/in/martin-ordonez-70a63a1a/",
    category: "PInvestigator",
  },
  {
    name: "Emanuel Serban",
    occupation: "Adjunct Professor",
    avatar: "/teampeople/emanuelserban.png?height=100&width=100",
    globe: "Emanuel.Serban@ieee.org",
    linkedin: "https://www.linkedin.com/in/emaserban/",
    category: "Research",
  },
  {
    name: "Jan Hammer",
    occupation: "Ph.D.Student",
    avatar: "/teampeople/janhammer.png?height=100&width=100",
    globe: "janh@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/hammerj/",
    category: "Support",
  },
  {
    name: "Farhad Abbasi",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/farhadabbasi.png?height=100&width=100",
    globe: "farhadab@student.ubc.ca",
    linkedin: "https://www.linkedin.com/in/farhad-abbasi-90923655/",
    category: "Support",
  },
  {
    name: "Maria García",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/mariagarcia.png?height=100&width=100",
    globe: "mcele@ieee.org",
    linkedin: "https://www.linkedin.com/in/mcele/",
    category: "Support",
  },
  {
    name: "Anna Lykhohub",
    occupation: "MASc Student",
    avatar: "/teampeople/annalykhohub.png?height=100&width=100",
    globe: "lyanna@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/anna-lykhohub/",
    category: "Support",
  },
  {
    name: "Hao Chen",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/haochen.png?height=100&width=100",
    globe: "howardchen@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/hao-chen-howard/",
    category: "Support",
  },
  {
    name: "Malinda Gunathilaka",
    occupation: "MASc Student",
    avatar: "/teampeople/malinda.png?height=100&width=100",
    globe: "malinda@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/malinda-gunathilaka/",
    category: "Support",
  },
  {
    name: "Navid Kashani",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/navid.png?height=100&width=100",
    globe: "nkashani@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/navid-zare-kashani/",
    category: "Support",
  },
  {
    name: "Jinji Tan",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/jinjitan.png?height=100&width=100",
    globe: "tanjinji@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/gilberttan1209/",
    category: "Support",
  },
  {
    name: "Gervasio Martinez",
    occupation: "MASc Student",
    avatar: "/teampeople/gervasio.png?height=100&width=100",
    globe: "gmartinez@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/gervasiomtz/",
    category: "Support",
  },
  {
    name: "Rolando Aguilera",
    occupation: "Ph.D. Student",
    avatar: "/teampeople/rolando.png?height=100&width=100",
    globe: "rolo90@ece.ubc.ca",
    linkedin: "https://www.linkedin.com/in/rolando-aguilera90/",
    category: "Support",
  },
  {
    name: "Francis Fu",
    occupation: "MASc Student",
    avatar: "/teampeople/francisfu.png?height=100&width=100",
    globe: "fran729@ubc.ece.ca",
    linkedin: "https://www.linkedin.com/in/francis-yuqi-fu/",
    category: "Support",
  },
  // Otros miembros...
];

function TeamMember({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden border hover:border-primary">
      <CardContent className="p-6 min-w-[225px]">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{member.occupation}</p>
          <div className="flex space-x-2">
            <a
              href={member.globe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamSectionByCategory({ category, members }: { category: string; members: TeamMember[] }) {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 text-center">
      <h3 className="text-2xl font-bold mb-8 text-center">{category}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function TeamSection() {
  const PInvestigator = teamMembers.filter((member) => member.category === "PInvestigator");
  const research = teamMembers.filter((member) => member.category === "Research");
  const support = teamMembers.filter((member) => member.category === "Support");

  return (
    <div className="container mx-auto text-center">
      <TeamSectionByCategory category="Principal Investigator" members={PInvestigator} />
      <TeamSectionByCategory category="Lab Operations & Researchers" members={research} />
      <TeamSectionByCategory category="Graduate Students" members={support} />
    </div>
  );
}
