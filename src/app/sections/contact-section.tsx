import { Section } from "@/components/section";
import { ContactForm } from "./contact-form";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
    <Section id="contact" className="bg-muted/40">
       <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-yellow-500 mx-auto rounded-full" />
          <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pt-4">
            Ready to discuss opportunities in hospitality management? I'd love to hear about your projects and explore how we can work together.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ContactForm />
        <Card className="relative border-t-4 border-yellow-400 shadow-lg">
          <CardHeader className="items-center text-center">
            <div className="p-4 bg-yellow-100 rounded-full mb-2">
              <Mail className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">Multiple ways to reach me</p>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {contactDetails.map((detail) => (
              <a 
                key={detail.label} 
                href={detail.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <detail.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">{detail.label}</p>
                  <p className="text-lg text-foreground group-hover:text-primary transition-colors">{detail.value}</p>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
