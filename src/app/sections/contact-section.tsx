import { Section, SectionTitle } from "@/components/section";
import { ContactForm } from "./contact-form";
import { Linkedin, Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    value: "denial.abnes@example.com",
    href: "mailto:denial.abnes@example.com",
    label: "Email"
  },
  {
    icon: Phone,
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    label: "Phone"
  },
  {
    icon: Linkedin,
    value: "linkedin.com/in/denialabnes",
    href: "https://www.linkedin.com/in/denialabnes",
    label: "LinkedIn"
  }
];

export default function ContactSection() {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
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
