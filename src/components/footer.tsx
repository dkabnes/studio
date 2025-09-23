import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {currentYear} Denial Abnes. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/denialabnes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-accent" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:denial.abnes@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-accent" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="tel:+15551234567" aria-label="Phone">
              <Phone className="h-5 w-5 text-accent" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
