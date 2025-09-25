
import { SectionTitle } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Building } from "lucide-react";

const certifications = [
  {
    title: "Diploma in Hotel Management",
    date: "Oct 2004",
    issuer: "ITI/ODP",
    description: "Strong base in guest relations, F&B operations, and front-of-house service.",
  },
  {
    title: "Advance Diploma in Human Resource Management",
    date: "Apr 2011",
    issuer: "Ajax",
    description: "Skilled in staffing, training, and boosting team performance.",
  },
  {
    title: "Certificate in Restaurant Management",
    date: "May 2017",
    issuer: "Royale Institution",
    description: "Hands-on knowledge of cost control, menu planning, and service flow.",
  },
  {
    title: "Food Handler Certification",
    date: "Sept 2024",
    issuer: "Food Safety Training, Canada",
    description: "Extensive knowledge of foodborne illness prevention, HACCP, and kitchen hygiene.",
  },
  {
    title: "Smart Serve",
    date: "Sept 2024",
    issuer: "Smart Serve Ontario, Canada",
    description: "Trained in responsible alcohol service, guest safety, and regulatory compliance.",
  },
  {
    title: "Supervisor Health and Safety Awareness",
    date: "Oct 2024",
    issuer: "Government of Ontario, Canada",
    description: "Practical understanding of workplace safety and risk management.",
  },
  {
    title: "WHMIS",
    date: "Oct 2024",
    issuer: "AixSafety.com, Canada",
    description: "Confident in handling hazardous materials and ensuring safe back-of-house practices.",
  },
];

const CertificationsSection = () => {
  return (
    <>
      <div className="flex items-center text-center my-12">
        <div className="flex-grow border-t border-muted-foreground/20"></div>
        <h3 className="mx-4 text-xl font-semibold text-foreground">Certifications & Courses</h3>
        <div className="flex-grow border-t border-muted-foreground/20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col border-t-4 border-accent shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <Award className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">{cert.description}</p>
              <div className="space-y-2 text-sm text-muted-foreground mt-auto">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CertificationsSection;
