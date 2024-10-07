"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Advanced Controllers",
    href: "/advanced-controllers",
    description:
      "Digital non-linear control strategies that enable intelligent power conversion.",
  },
  {
    title: "Renewable Energy System",
    href: "/renewable-energy-systems",
    description:
      "Special power converters and advanced algorithms enable the cost-effective adoption of renewable energy.",
  },
  {
    title: "EV Battery Chargers",
    href: "/ev-battery-chargers",
    description:
      "High-efficiency ultra compact battery chargers for new generation electric vehicles.",
  },
  {
    title: "Conversion Efficiency",
    href: "/conversion-efficiency",
    description: "Rapid power loss estimation in complex topologies for optimum converter design.",
  },
  {
    title: "Planar Magnetics",
    href: "/magnetics",
    description:
      "State-of-the-art advanced magnetics design for complex power converters.",
  },
]

const publications: { title: string; href: string; description: string }[] = [
  {
    title: "Journals",
    href: "/journals",
    description: "Peer-reviewed publications covering original research in my field.",
  },
  {
    title: "Conferences",
    href: "/conferences",
    description: "Papers presented at conferences highlighting my latest advancements and discoveries.",
  },
  {
    title: "Patents",
    href: "/patents",
    description: "Patents that protect my innovations and processes in the field of technology.",
  },
];
 
export function UpNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/newsevents" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            News & Events
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>About</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="https://www.linkedin.com/in/martin-ordonez-70a63a1a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Martín Ordonez
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                  I invite you to connect with me on LinkedIn. There you can learn more about my projects, ideas, and the work I've done throughout my career.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <ListItem href="/about-martin" title="Martín">
            Dr. Martin Ordonez is a Professor and Canada Research Chair at the University of British Columbia (UBC), Vancouver, BC, Canada. He is also the Fred Kaiser Chair in Power Conversion and Sustainability at UBC.
            </ListItem>
            <ListItem href="/fred-kaiser-chair" title="Fred Kaiser Chair">
            Usage of fossil fuels for applications such as energy generation results in environmental and health concerns all across the globe. Advances in power conversion, generation and efficiency are fundamental for the continuous development of our society to minimize the impact on the environment and public health.
            </ListItem>
            <ListItem href="/canada-research-chair" title="Canada Research Chair">
            Dr. Martin Ordonez was appointed Canada Research Chair in Power Converters for Renewable Energy Systems in 2014.
            </ListItem>
            <ListItem href="/sustaingineering" title="Sustaingineering">
            Is a student team that designs, develops and deploys sustainable technology solutions for renewable energy applications in remote and developing communities.
            </ListItem>
            <ListItem href="/ieee-pels-vancouver" title="IEEE PELS Vancouver">
            The Vancouver Section of IEEE was originally established as a Section of the American Institute of Electrical Engineers (AIEE) in 1911.
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Research & Development</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Publications</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {publications.map((publication) => (
              <ListItem
                key={publication.title}
                title={publication.title}
                href={publication.href}
              >
                {publication.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Team
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/courses" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Courses
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"