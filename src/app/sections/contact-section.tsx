import { Section, SectionTitle } from "@/components/section";
import { ContactForm } from "./contact-form";
import { Linkedin, Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    value: "dkabnes@gmail.com",
    href: "mailto:dkabnes@gmail.com",
    label: "Email"
  },
  {
    icon: Phone,
    value: "+965 65995049",
    href: "tel:+96565995049",
    label: "Phone"
  },
  {
    icon: Linkedin,
    value: "linkedin.com/in/danielabnes",
    href: "https://www.linkedin.com/in/danielabnes/",
    label: "LinkedIn"
  }
];

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle className="text-foreground">Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new opportunities, creative ideas, or ways to collaborate. Feel free to reach out.
          </p>
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <a 
                key={detail.label} 
                href={detail.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group"
              >
                <detail.icon className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground group-hover:text-primary transition-colors">{detail.value}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
