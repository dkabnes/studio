import Link from "next/link";
import { Linkedin, Mail, Phone, Heart } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#accomplishments", label: "Accomplishments" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { icon: Mail, href: "mailto:dkabnes@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/danielabnes/", label: "LinkedIn" },
    { icon: Phone, href: "tel:+96565995049", label: "Phone" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Denial Abnes</h3>
            <p className="text-muted-foreground max-w-xs">
              Passionate hospitality professional dedicated to creating exceptional experiences and driving operational excellence across international markets.
            </p>
            <div className="flex items-center gap-2">
                {socialLinks.map(link => (
                    <a 
                        key={link.label}
                        href={link.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="inline-flex items-center justify-center w-10 h-10 bg-background/50 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                        <link.icon className="h-5 w-5" />
                    </a>
                ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
                <li>Kuwait City, Kuwait</li>
                <li>dkabnes@gmail.com</li>
                <li>+965 65995049</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="text-center md:text-left mb-4 md:mb-0">
                &copy; {currentYear} Denial Abnes. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
                Made with <Heart className="h-4 w-4 text-primary" /> for hospitality excellence
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
