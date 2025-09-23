import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, LineChart, Users, ConciergeBell, Target, type LucideIcon } from "lucide-react";

type Skill = {
  name: string;
  icon: LucideIcon;
};

const skills: Skill[] = [
  { name: "Food Costing & Quality Control", icon: UtensilsCrossed },
  { name: "Financial Planning & Budgeting", icon: LineChart },
  { name: "Training & Development", icon: Users },
  { name: "Exceptional Customer Service", icon: ConciergeBell },
  { name: "Strategic Business Orientation", icon: Target },
];

export default function SkillsSection() {
  return (
    <Section id="skills">
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="text-center group hover:shadow-lg transition-shadow bg-secondary">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-10 w-10 text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
