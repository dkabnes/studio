import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UtensilsCrossed, LineChart, Users, Heart, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  proficiency: number;
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
];

const SectionSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-center my-12">
    <div className="flex-grow border-t border-muted-foreground"></div>
    <h3 className="mx-4 text-xl font-semibold text-foreground">{children}</h3>
    <div className="flex-grow border-t border-muted-foreground"></div>
  </div>
);

export default function SkillsSection() {
  return (
    <Section id="skills" className="bg-background">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
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
    </Section>
  );
}