import { Linkedin, Youtube, Briefcase, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto flex flex-col gap-y-10">
        {/* Logo con Redes Sociales */}
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logomartin-black.svg"
              alt="Company Logo"
              className="w-full max-w-md md:max-w-sm lg:max-w-lg dark:hidden"
            />
            <div>
              <img
                src="/logomartin-white.svg"
                alt="Company Logo"
                className="w-full max-w-md md:max-w-sm lg:max-w-lg hidden dark:block"
              />
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-4 ps-4">
            <a
              href="https://www.youtube.com/c/PowerElectronicsUBC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/martin-ordonez-70a63a1a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Recruiting"
            >
              <Briefcase className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Navegación de Footer en 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Columna 1 */}
          <div>
            <h4 className="font-semibold text-primary">Research & Development</h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <a href="/advanced-controllers" className="hover:text-primary transition-colors">Advanced Controllers</a>
              </li>
              <li>
                <a href="/renewable-energy-systems" className="hover:text-primary transition-colors">Renewable Energy System</a>
              </li>
              <li>
                <a href="/ev-battery-chargers" className="hover:text-primary transition-colors">EV Battery Chargers</a>
              </li>
              <li>
                <a href="/conversion-efficiency" className="hover:text-primary transition-colors">Conversion Efficiency</a>
              </li>
              <li>
                <a href="/magnetics" className="hover:text-primary transition-colors">Planar Magnetics</a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-semibold text-primary">Publications</h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <a href="/publications/journals" className="hover:text-primary transition-colors">Journals</a>
              </li>
              <li>
                <a href="/publications/conferences" className="hover:text-primary transition-colors">Conferences</a>
              </li>
              <li>
                <a href="/publications/patents" className="hover:text-primary transition-colors">Patents</a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="font-semibold text-primary">About</h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <a href="/about-martin" className="hover:text-primary transition-colors">Martin</a>
              </li>
              <li>
                <a href="/fred-kaiser-chair" className="hover:text-primary transition-colors">Fred Kaiser Chair</a>
              </li>
              <li>
                <a href="/canada-research-chair" className="hover:text-primary transition-colors">Canada Research Chair</a>
              </li>
              <li>
                <a href="/sistaingineering" className="hover:text-primary transition-colors">Sustaingineering</a>
              </li>
              <li>
                <a href="/ieee-pels-vancouver" className="hover:text-primary transition-colors">IEEE PELS Vancouver</a>
              </li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h4 className="font-semibold text-primary flex pe-4">Jobs</h4>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <a href="contact" className="hover:text-primary transition-colors">Recruiting</a><ExternalLink />
              </li>
            </ul>
          </div>
        </div>
        <div>
        <p className="text-center text-sm text-muted-foreground mt-10">
  © {new Date().getFullYear()} Martín Ordonez, All rights reserved. | Power Electronics and Renewable Energy
</p>
        </div>
      </div>
    </footer>
  );
}
