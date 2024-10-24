import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Linkedin, Mail } from "lucide-react";
import { teamMembers, TeamMember } from "@/data/team";



function TeamMemberComponent({ member }: { member: TeamMember }) {
  if (member.category === "Students") {
    return (
      <Card className="w-full max-w-72 overflow-hidden border hover:border-primary transition-colors duration-300 flex flex-col justify-between">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
            <div className="flex items-center space-x-2 mb-2">
              {member.degree && <Badge variant="secondary">{member.degree}</Badge>}
              {member.graduationYear && <span className="text-sm text-muted-foreground">({member.graduationYear})</span>}
            </div>
            <p className="text-sm text-muted-foreground mb-4">{member.occupation}</p>
            {member.thesis && (
              <div className="w-full">
                <h4 className="font-semibold text-sm mb-2">Thesis</h4>
                <p className="text-sm text-muted-foreground mb-4 italic">{member.thesis}</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="bg-muted p-4 flex justify-center space-x-4">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              title="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          )}
        </CardFooter>
      </Card>
    );
  }

  // Diseño original para las demás categorías
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
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              title="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          )}
            {member.globe && (
              <a
                href={member.globe}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
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
          <TeamMemberComponent key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function TeamSection() {
  const PInvestigator = teamMembers.filter((member) => member.category === "PInvestigator");
  const research = teamMembers.filter((member) => member.category === "Research");
  const support = teamMembers.filter((member) => member.category === "Support");
  const students = teamMembers.filter((member) => member.category === "Students");

  return (
    <div className="container mx-auto text-center">
      <TeamSectionByCategory category="Principal Investigator" members={PInvestigator} />
      <TeamSectionByCategory category="Lab Operations & Researchers" members={research} />
      <TeamSectionByCategory category="Graduate Students" members={support} />
      <TeamSectionByCategory category="Students" members={students} />
    </div>
  );
}
