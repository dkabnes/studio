
import Image from "next/image";
import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, TrendingUp, Zap, Handshake, ShieldCheck, Lightbulb, DollarSign, User, CalendarClock, Trophy, Building, Percent } from "lucide-react";

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
      "Established all operational workflows and procurement processes for the new resort.",
      "Successfully launched the resort, meeting all pre-set timelines and quality standards."
    ],
    skills: ["Project Management", "Budgeting", "Team Leadership", "Procurement", "Operational Planning"],
    metrics: [
        { icon: TrendingUp, value: "100%", label: "Launch Target Met" },
        { icon: Users, value: "50+", label: "Staff Hired & Trained" },
        { icon: Target, value: "15%", label: "Cost Savings" },
    ]
  },
  {
    title: "COVID-19 Revenue Recovery Strategy",
    company: "Solo Management Co.",
    description: "Pioneered innovative service delivery methods during the pandemic, maintaining business continuity and customer relationships by introducing car dining and forging strategic delivery partnerships.",
    image: PlaceHolderImages.find(p => p.id === 'project-solo-mgmt'),
    achievements: [
      "Launched car dining services maintaining social distancing.",
      "Established delivery partnerships with major platforms.",
      "Implemented contactless payment and ordering systems.",
      "Maintained 80% of pre-pandemic revenue during peak restrictions."
    ],
    skills: ["Crisis Leadership", "Digital Innovation", "Partnership Development", "Service Design", "Revenue Management"],
    metrics: [
        { icon: TrendingUp, value: "80%", label: "Revenue Maintained" },
        { icon: Lightbulb, value: "5", label: "New Services" },
        { icon: Handshake, value: "2", label: "Partnerships" },
    ]
  },
  {
    title: "Abu Hasaniya Restaurant Turnaround",
    company: "Solo Management Co.",
    description: "Led operational improvements for a newly opened restaurant, implementing strategic changes to boost sales and operational efficiency.",
    image: PlaceHolderImages.find(p => p.id === 'project-abu-hasaniya'),
    achievements: [
      "Redesigned operational workflows and staff scheduling.",
      "Implemented new menu engineering and pricing strategies.",
      "Launched targeted marketing and customer retention programs.",
      "Established quality control systems and staff training protocols."
    ],
    skills: ["Operations Optimization", "Menu Engineering", "Marketing Strategy", "Quality Management", "Financial Analysis"],
    metrics: [
        { icon: TrendingUp, value: "32%", label: "Sales Increase" },
        { icon: DollarSign, value: "25%", label: "Cost Reduction" },
        { icon: Users, value: "+40%", label: "Staff Efficiency" },
    ]
  },
  {
    title: "Sustained Sales Excellence at Pizzabar",
    company: "Pizzabar, Threesixty Mall",
    description: "Demonstrated exceptional performance by consistently surpassing monthly sales targets for three consecutive months at Pizzabar in Threesixty Mall, significantly contributing to revenue growth.",
    image: PlaceHolderImages.find(p => p.id === 'project-pizzabar'),
    achievements: [
        "Exceeded monthly sales targets by an average of 10% for three consecutive months.",
        "Implemented upselling strategies that increased average transaction value by 15%.",
        "Fostered a competitive yet collaborative team environment focused on sales goals.",
        "Recognized as a top-performing manager within the mall's food and beverage sector."
    ],
    skills: ["Sales Leadership", "Team Motivation", "Upselling Techniques", "Performance Tracking", "Customer Engagement"],
    metrics: [
        { icon: TrendingUp, value: "+10%", label: "Avg. Target Exceeded" },
        { icon: CalendarClock, value: "3", label: "Consecutive Months" },
        { icon: Trophy, value: "Top", label: "Performer" },
    ]
  },
  {
    title: "Strategic Growth at The Sapphire Comfort Hotel",
    company: "The Sapphire Comfort Hotel",
    description: "As General Manager, I engineered a multi-faceted strategy to drive revenue and market presence. By forging strategic alliances with key OTAs and TMCs, and launching targeted promotional campaigns, I significantly boosted both room occupancy and F&B sales.",
    image: PlaceHolderImages.find(p => p.id === 'project-sapphire-hotel'),
    achievements: [
      "Forged new strategic partnerships with Online Travel Agencies (OTAs) and Travel Management Companies (TMCs).",
      "Designed and executed successful promotional campaigns for both rooms and F&B departments.",
      "Curated and managed high-impact events, significantly increasing footfall and F&B revenue.",
      "Achieved a substantial increase in overall hotel occupancy and profitability."
    ],
    skills: ["Strategic Partnerships", "Revenue Growth", "Event Management", "Promotional Campaigns", "P&L Management"],
    metrics: [
      { icon: Building, value: "+20%", label: "Occupancy Increase" },
      { icon: Percent, value: "+15%", label: "F&B Sales Growth" },
      { icon: Handshake, value: "30+", label: "New Partnerships" },
    ]
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="bg-secondary/50">
        <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    {project.image && (
                    <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-background shadow-lg mb-8">
                        <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        data-ai-hint={project.image.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                    {project.metrics.map((metric, index) => (
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
                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                        <p className="text-lg text-muted-foreground">{project.company}</p>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                    <div>
                        <h4 className="font-semibold text-lg mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                        {project.achievements.map((item, index) => (
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
                        {project.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-accent/10 text-accent-foreground">{skill}</Badge>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionTitle className="text-foreground">Notable Projects</SectionTitle>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
