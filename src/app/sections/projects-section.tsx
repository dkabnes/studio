import Image from "next/image";
import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, TrendingUp } from "lucide-react";

type Project = {
  title: string;
  company: string;
  description: string;
  image: ImagePlaceholder | undefined;
  achievements: string[];
  skills: string[];
  metrics: {
    icon: React.ElementType;
    value: string;
    label: string;
  }[];
};

const projects: Project[] = [
  {
    title: "Reopening Royal Goans Beach Club",
    company: "Royal Goans Group",
    description: "Spearheaded the complete pre-opening phase, from interior design concepts and staffing to purchasing and comprehensive budget forecasting, ensuring a successful and seamless launch.",
    image: PlaceHolderImages.find(p => p.id === 'project-royal-goans'),
    achievements: [
      "Led the pre-opening and reopening team, overseeing all aspects from interior design to staffing.",
      "Developed comprehensive budget forecasts, ensuring financial viability from day one.",
      "Established all operational workflows and procurement processes for the new club.",
      "Successfully launched the club, meeting all pre-set timelines and quality standards."
    ],
    skills: ["Project Management", "Budgeting", "Team Leadership", "Procurement", "Operational Planning"],
    metrics: [
        { icon: TrendingUp, value: "100%", label: "Launch Target Met" },
        { icon: Users, value: "50+", label: "Staff Hired & Trained" },
        { icon: Target, value: "15%", label: "Cost Savings" },
    ]
  },
  {
    title: "Turnaround during COVID-19",
    company: "Solo Management Co.",
    description: "Innovated at Solo Management Co. by introducing car dining services and forging strategic delivery partnerships, successfully reversing a sales decline and driving growth during a challenging period.",
    image: PlaceHolderImages.find(p => p.id === 'project-solo-mgmt'),
    achievements: [],
    skills: [],
    metrics: []
  },
  {
    title: "Operational Leadership at Abu Hasaniya",
    company: "Solo Management Co.",
    description: "Took charge of a newly opened restaurant, implementing strategic initiatives that dramatically improved operational efficiency and drove significant sales growth from the ground up.",
    image: PlaceHolderImages.find(p => p.id === 'project-abu-hasaniya'),
    achievements: [],
    skills: [],
    metrics: []
  },
  {
    title: "Sustained Sales Excellence at Pizzabar",
    company: "Pizzabar, Threesixty Mall",
    description: "Demonstrated exceptional performance by consistently surpassing monthly sales targets for three consecutive months at Pizzabar in Threesixty Mall, significantly contributing to revenue growth.",
    image: PlaceHolderImages.find(p => p.id === 'project-pizzabar'),
    achievements: [],
    skills: [],
    metrics: []
  }
];

export default function ProjectsSection() {
    const royalGoansProject = projects[0];

  return (
    <Section id="projects">
      <SectionTitle>Notable Projects</SectionTitle>
      
      <Card className="bg-secondary/50">
        <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    {royalGoansProject.image && (
                    <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-background shadow-lg mb-8">
                        <Image
                        src={royalGoansProject.image.imageUrl}
                        alt={royalGoansProject.image.description}
                        data-ai-hint={royalGoansProject.image.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                    {royalGoansProject.metrics.map((metric, index) => (
                        <div key={index} className="p-4 bg-background rounded-lg shadow-inner-sm">
                            <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-bold text-primary">{metric.value}</p>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">{royalGoansProject.title}</h3>
                        <p className="text-lg text-muted-foreground">{royalGoansProject.company}</p>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">{royalGoansProject.description}</p>

                    <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                        {royalGoansProject.achievements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Skills Applied</h4>
                        <div className="flex flex-wrap gap-2">
                        {royalGoansProject.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-background">{skill}</Badge>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </Section>
  );
}