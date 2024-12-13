import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface Event {
  date: string
  title: string
  mainTopic: string
  description: string
  speakers: string[]
  organization: string
  sponsor?: string
}

const events: Event[] = [
    {
      date: "April 24, 2024",
      title: "Kaiser Chair Energy Security Talk Series",
      mainTopic: "Grid Modernization - Paving the Path for the Future",
      description: "Learn about grid modernization and how to plan, design, and engineer your system",
      speakers: ["D. Jim Papadoulis", "Valentina Dabic"],
      organization: "BC Hydro",
      sponsor: "IEEE PELS"
    },
    {
      date: "October 11, 2023",
      title: "Kaiser Chair Energy Security Talk Series",
      mainTopic: "Challenges and Innovation Opportunities for Electrifying the Transportation Sector",
      description: "Lunch and learn about the challenges in electrifying the transportation sector",
      speakers: ["Prof. Olivier Trescases"],
      organization: "University of Toronto",
      sponsor: "IEEE PELS"
    },
    {
      date: "February 25, 2022",
      title: "High Performance Gate-Driver Power Supply for Renewable and Energy Storage Converters",
      mainTopic: "High Performance Gate-Driver Power Supply for Renewable Energy and Converters",
      description: "Webinar on high performance gate-driver power supply for renewable energy and converters",
      speakers: ["Dr. Emanuel Serban"],
      organization: "EnerSys"
    },
    {
      date: "December 1, 2021",
      title: "Free-Position Wireless Chargers: Fundamentals and Challenges",
      mainTopic: "Fundamentals and Challenges of Free-Position Wireless Charging",
      description: "Webinar on fundamentals of free-position wireless charging and the technical challenges",
      speakers: ["Dr. Ali Saket", "Mr. Eric Goodchild"],
      organization: "Airapower"
    },
    {
      date: "November 14, 2019",
      title: "IEEE PELS Industry-Academia Series: EnerSys Developments in Lithium-Ion Storage Technologies",
      mainTopic: "Developments in Lithium-Ion Storage Technologies",
      description: "Lunch and learn about EnerSys developments in lithium-ion storage technologies",
      speakers: ["Joern Tinnemeyer"],
      organization: "EnerSys"
    },
    {
      date: "October 23, 2019",
      title: "IEEE PELS Seminars on the Myths of Transmission Lines and High-Power Battery Chargers",
      mainTopic: "Myths of Transmission Lines and High-Power Battery Chargers",
      description: "Lunch and learn about the myths of transmission lines and high-power battery chargers",
      speakers: ["Dr. Jahangir Khan", "Sayed Abbas Arshadi"],
      organization: "BC Hydro, The University of British Columbia (UBC)"
    },
    {
      date: "July 5, 2019",
      title: "IEEE PELS Seminars on Electric Vehicle Charging Stations and High Power Density Converters",
      mainTopic: "Electric Vehicle Charging Stations and High Power Density Converters",
      description: "Lunch and learn about high power density power converters and battery electric vehicle charging stations",
      speakers: ["Dr. Ali Khajehoddin", "Dr. Aitor Vázquez Ardura"],
      organization: "University of Alberta, University of Oviedo"
    },
    {
    date: "June 13, 2019",
    title: "IEEE PELS Seminars on Single Reference Six Pulse Modulation (SRSPM)",
    mainTopic: "Single Reference Six Pulse Modulation (SRSPM) for High-Frequency Pulsating DC Link Three-Phase Inverters",
    description: "Lunch and learn about single reference six pulse modulation (SRSPM) for high-frequency pulsating DC link three-phase inverters",
    speakers: ["Dr. Akshay Kumar Rathore"],
    organization: "Concordia University",
    sponsor: "IEEE PELS"
    },
    {
    date: "April 23, 2019",
    title: "IEEE PELS Seminars on Safety Considerations for Electronics Development",
    mainTopic: "Safety Considerations for Electronics Development",
    description: "A quick refresher on common hazards found in electronics development and ideas to improve safety",
    speakers: ["Nicholas Dohmeier"],
    organization: "Delta-Q Technologies",
    sponsor: "IEEE PELS"
    },
    {
    date: "February 13, 2019",
    title: "IEEE PELS Seminars on Embedded Software Development in Power Converters",
    mainTopic: "Embedded Software Development in Power Converters",
    description: "Lunch and learn about embedded software development in power converters",
    speakers: ["Steven Marks", "Jan Hammer"],
    organization: "SMPC Technologies Ltd.", 
    sponsor: "IEEE PELS"
    },
    {
    date: "January 9, 2019",
    title: "IEEE PELS Seminars on Engineering Education and Sustainable Technology in Developing Countries",
    mainTopic: "Engineering Education and Sustainable Technology in Developing Countries",
    description: "Lunch and learn about engineering education and sustainable technology in developing countries",
    speakers: ["Harry Pigot", "Matthieu Amyotte"],
    organization: "University of British Columbia",
    sponsor: "IEEE PELS"
    },
    {
    date: "December 5, 2018",
    title: "IEEE PELS Seminars on Data-Driven Control and Asymmetrical Inverters",
    mainTopic: "Data-Driven Control and Asymmetrical Inverters",
    description: "Lunch and learn about data-driven control and asymmetrical inverters for renewable energy integration",
    speakers: ["Dr. Gerardo Escobar Valderrama", "Dr. Jonathan C. Mayo-Maldonado"],
    organization: "Monterrey Institute of Technology and Higher Education",
    sponsor: "IEEE PELS"
    },
    {
    date: "November 26, 2018",
    title: "IEEE PELS Seminars on Power Electronic Devices Characterization and Temperature Measurement Techniques",
    mainTopic: "Power Electronic Devices Characterization and Temperature Measurement Techniques",
    description: "Lunch and learn about the power electronic devices characterization and temperature measurement techniques",
    speakers: ["Daryl James", "Ettore Scabeni Glitz", "Maria Celeste Garcia", "Matthieu Amyotte"],
    organization: "OSENSA Innovations Corp.",
    sponsor: "IEEE PELS"
    },
    {
    date: "September 26, 2018",
    title: "IEEE PELS Seminars on Analytics Systems Ltd. and Dual-Loop Control Algorithms in Resonant Converters",
    mainTopic: "Dual-Loop Control Algorithms in Resonant Converters",
    description: "Introduction to Analytics Systems Ltd. and Dual-Loop Control Algorithms in Resonant Converters",
    speakers: ["Eugene Trandafir", "Franco Degioanni"],
    organization: "Analytics Systems Ltd.", 
    sponsor: "IEEE PELS"
    },
    {
        date: "August 20, 2018",
        title: "IEEE PELS Seminars on EMI Regulatory Compliance, and the Next Generations of Heat Sinks",
        mainTopic: "EMI Regulatory Compliance, and the Next Generations of Heat Sinks Using Graphite",
        description: "Lunch and Learn about the EMI regulatory compliance and advanced heat sink technologies using graphite",
        speakers: ["Rob Stirling", "Martin Cermak"],
        organization: "EMC, Simon Fraser University",
        sponsor: "IEEE PELS"
      },
      {
        date: "July 16, 2018",
        title: "IEEE PELS Seminars on Real-Time Simulation and Islanded Microgrid Energy Management",
        mainTopic: "Real-Time Simulation and Islanded Microgrid Energy Management",
        description: "Lunch and Learn about innovations in real-time simulation and islanded microgrid energy management",
        speakers: ["Ramin Mirzahosseini", "Moein Manbachi"],
        organization: "RTDS Technologies Inc., UBC",
        sponsor: "IEEE PELS"
      },
      {
        date: "May 31, 2018",
        title: "IEEE PELS Seminars on Photovoltaic Inverters",
        mainTopic: "Photovoltaic Inverters at Utility Scale and Modulation Design",
        description: "Coffee and Learn about utility-scale photovoltaic inverters and modulation design",
        speakers: ["Subhadeep Bhattacharya", "Emanuel Serban"],
        organization: "Schneider Electric",
        sponsor: "IEEE PELS"
      },
      {
        date: "November 24, 2017",
        title: "IEEE PELS Seminars on Test Automation with LabVIEW",
        mainTopic: "Test Automation with LabVIEW",
        description: "Lunch and Learn about test automation using LabVIEW",
        speakers: ["Jerry Wu"],
        organization: "Alpha Technologies Ltd.",
        sponsor: "IEEE PELS"
      },
      {
        date: "October 30, 2017",
        title: "IEEE PELS Seminars on Flywheel Energy Storage",
        mainTopic: "Flywheel Energy Storage: The Utility Scale Energy Storage Solution",
        description: "Lunch and Learn about flywheel energy storage for utility-scale applications",
        speakers: ["Seth R. Sanders"],
        organization: "UC Berkeley",
        sponsor: "IEEE PELS"
      },
      {
        date: "July 19, 2017",
        title: "IEEE PELS Seminars on In-The-Loop Testing of Power Electronic Systems",
        mainTopic: "In-The-Loop Testing of Power Electronic Systems",
        description: "Lunch and Learn about Plexim's in-the-loop testing of power electronic systems",
        speakers: ["Kristofer Eberle"],
        organization: "Plexim, Inc.",
        sponsor: "IEEE PELS"
      },
      {
        date: "June 28, 2017",
        title: "IEEE PELS Seminars on DC Grids and Energy Internet in China",
        mainTopic: "Photovoltaic DC Grids and Energy Internet in China",
        description: "Lunch and Learn about photovoltaic DC grids and the energy internet in China",
        speakers: ["Kai Sun"],
        organization: "Tsinghua University",
        sponsor: "IEEE PELS"
      },
      {
        date: "February 20, 2017",
        title: "IEEE PELS Seminars on Utilities and PV Power Plant Design",
        mainTopic: "The Past and Future of Utilities and PV Power Plant Design",
        description: "Lunch and Learn about the evolution and future of utilities and PV power plant design",
        speakers: ["Cam LeHouillier", "Francisco Paz"],
        organization: "Tacoma Power, UBC",
        sponsor: "IEEE PELS"
      },
      {
        date: "January 24, 2017",
        title: "IEEE PELS Seminars on Battery Health, Monitoring, and Charging",
        mainTopic: "Battery Health, Monitoring, and Charging",
        description: "Lunch and Learn about battery health, monitoring, and charging techniques",
        speakers: ["Isidor Buchmann", "Tina Shoa", "Navid Shafiei"],
        organization: "CADEX Electronics, UBC",
        sponsor: "IEEE PELS"
      }      
  ];

  
  

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