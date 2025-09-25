import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import CertificationsSection from "./certifications-section";

const accomplishments = [
    {
      title: "MBA in Hotel Management",
      issuer: "Himalayan University",
      year: "2020",
      icon: GraduationCap,
    },
    {
      title: "Bachelor's in Business Administration",
      issuer: "Madurai Kamaraj University",
      year: "2008",
      icon: Award,
    },
]

const AccomplishmentsSection = () => {
    return (
        <Section id="accomplishments" className="bg-background">
            <SectionTitle className="text-foreground">
                Accomplishments
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                {accomplishments.map((accomplishment) => (
                    <Card key={accomplishment.title}>
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-xl">
                                    <accomplishment.icon className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-foreground mb-1">{accomplishment.title}</h4>
                                    <p className="text-accent font-medium text-md mb-1">{accomplishment.issuer}</p>
                                    <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent inline-block">{accomplishment.year}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <CertificationsSection />
        </Section>
    );
};

export default AccomplishmentsSection;
