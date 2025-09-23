import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MBA in Hotel Management",
    university: "Himalayan University",
    year: "2020",
  },
  {
    degree: "Bachelor’s in Business Administration",
    university: "Madurai Kamaraj University",
    year: "2008",
  },
];

export default function AboutSection() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 text-lg text-foreground/80">
          <p>
            With over 14 years of dedicated experience in the hospitality industry across Kuwait, UAE, Canada, and India, I have built a career founded on a passion for excellence and a commitment to transformative leadership. My journey has equipped me with a comprehensive understanding of both front-of-house and back-of-house operations, allowing me to drive profitability while enhancing the guest experience.
          </p>
          <p>
            My leadership philosophy centers on building and mentoring strong, cross-functional teams. I believe that empowering employees with the right training and tools is the key to delivering exceptional service. I thrive on challenges, from turning around sales during economic downturns to orchestrating the successful launch of new establishments. My strengths lie in strategic financial planning, meticulous food costing, and maintaining impeccable quality control, ensuring every operation I manage is both a commercial success and a hallmark of quality.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Education</h3>
          {education.map((edu, index) => (
            <Card key={index} className="bg-secondary">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base font-bold">{edu.degree}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.university} - {edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
