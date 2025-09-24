import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Utensils, Shield, Globe, BookOpen, UtensilsCrossed, LineChart, Users, Heart, GraduationCap, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  proficiency: number;
};

type Specialization = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const coreCompetencies: Skill[] = [
  { 
    name: "Food Costing & Quality Control", 
    description: "Expert in menu engineering, cost optimization, and quality assurance systems.",
    icon: UtensilsCrossed, 
    proficiency: 95 
  },
  { 
    name: "Financial Planning & Budgeting", 
    description: "Advanced financial modeling, P&L management, and revenue optimization.",
    icon: LineChart, 
    proficiency: 90 
  },
  { 
    name: "Training & Development", 
    description: "Comprehensive staff development programs and leadership mentoring.",
    icon: Users, 
    proficiency: 92 
  },
  { 
    name: "Customer Service Excellence", 
    description: "Creating exceptional guest experiences and service recovery strategies.",
    icon: Heart, 
    proficiency: 96 
  },
  {
    name: "Strategic Orientation",
    description: "Long-term planning, market analysis, and competitive positioning.",
    icon: Target,
    proficiency: 88,
  },
  {
    name: "Operations Management",
    description: "End-to-end operational efficiency and process optimization.",
    icon: LineChart,
    proficiency: 94,
  },
];

const specializations: Specialization[] = [
    {
        title: "Culinary Operations",
        icon: Utensils,
        skills: ["Menu Development", "Kitchen Management", "Food Safety", "Vendor Relations"],
    },
    {
        title: "Risk Management",
        icon: Shield,
        skills: ["Crisis Leadership", "Compliance", "Safety Protocols", "Insurance Management"],
    },
    {
        title: "International Markets",
        icon: Globe,
        skills: ["Cultural Adaptation", "Multi-Currency Operations", "Local Regulations", "Cross-Cultural Teams"],
    },
    {
        title: "Continuous Learning",
        icon: BookOpen,
        skills: ["Industry Trends", "Technology Adoption", "Best Practices", "Innovation Implementation"],
    },
];

const SectionSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-center my-12">
    <div className="flex-grow border-t border-muted-foreground/20"></div>
    <h3 className="mx-4 text-xl font-semibold text-foreground">{children}</h3>
    <div className="flex-grow border-t border-muted-foreground/20"></div>
  </div>
);

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-background">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                Skills & Expertise
            </h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive skill set built through years of hands-on experience in diverse
                hospitality environments across international markets.
            </p>
        </div>

        <SectionSubTitle>Core Competencies</SectionSubTitle>

        <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((skill, index) => (
            <Card key={index} className="border-l-4 border-primary overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="p-4 bg-primary/10 rounded-xl">
                                <skill.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                                {skill.proficiency}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Proficiency Level</span>
                            <span className="text-sm font-bold text-primary">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-primary/50 [&>div]:to-primary" />
                         <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">Beginner</span>
                            <span className="text-xs text-muted-foreground">Expert</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            ))}
        </div>
        <SectionSubTitle>Areas of Specialization</SectionSubTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="bg-secondary/50 p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <div className="p-5 inline-block bg-background rounded-2xl shadow-inner-lg group-hover:bg-white transition-colors">
                            <spec.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary/80 text-white backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold border-2 border-background">
                            {spec.skills.length}
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground">{spec.title}</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {spec.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="bg-background group-hover:bg-white transition-colors">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </Card>
          ))}
        </div>
    </Section>
  );
}
