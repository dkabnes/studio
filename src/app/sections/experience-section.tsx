
import { Section, SectionTitle } from "@/components/section";
import { Briefcase, Calendar, MapPin, Award, Lightbulb, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const experiences = [
    {
        role: "Food Service Supervisor/Manager",
        company: "Chuck’s Road House",
        location: "Sault, Canada",
        period: "2024 – 2025",
        description: "Oversaw daily operations and staff activities in a high-volume restaurant, ensuring compliance with health, safety, and quality standards while fostering a positive dining experience.",
        achievements: [
            "Supervised and coordinated activities of food service staff.",
            "Ensured compliance with health and safety regulations.",
            "Maintained high standards of food quality and presentation.",
            "Trained new employees and provided ongoing training for existing staff."
        ],
        skills: ["Supervision", "Safety Compliance", "Quality Control", "Staff Training"],
    },
    {
        role: "Restaurant Manager",
        company: "Solo Management Co.",
        location: "Mirqab, Kuwait",
        period: "2018 – 2024",
        description: "Managed daily operations, ensuring seamless service and high standards of quality. Developed and implemented strategies that significantly boosted sales, even during the COVID-19 pandemic.",
        achievements: [
            "Pioneered car dining services during COVID-19, maintaining 80% revenue.",
            "Established delivery partnerships increasing reach by 150%.",
            "Implemented cost-control measures reducing operational expenses by 25%.",
            "Maintained 4.5+ star rating across all review platforms.",
        ],
        skills: ["Crisis Management", "Revenue Optimization", "Digital Integration", "Team Leadership"],
    },
    {
        role: "Assistant General Manager",
        company: "Royal Goans Beach Resort",
        location: "India",
        period: "2016",
        description: "Led the pre-opening and reopening team, overseeing interior design, staffing, and procurement. Developed budget forecasts and established operational workflows for the newly opened resort.",
        achievements: [
            "Led the pre-opening and reopening team, overseeing interior design, staffing, and procurement.",
            "Developed budget forecasts and established operational workflows for the newly opened resort.",
            "Assisted in all aspects of management to ensure a successful launch.",
        ],
        skills: ["Project Management", "Budgeting", "Pre-opening", "Procurement"],
    },
    {
        role: "General Manager",
        company: "The Sapphire Comfort Hotel",
        location: "India",
        period: "2013 – 2015",
        description: "Directed all hotel operations, including guest services, housekeeping, and F&B departments. Implemented cost-control measures that improved profitability without compromising guest satisfaction.",
        achievements: [
            "Directed all hotel operations, including guest services, housekeeping, and F&B departments.",
            "Implemented cost-control measures that improved profitability without compromising guest satisfaction.",
            "Championed a culture of excellence and continuous improvement among staff.",
        ],
        skills: ["Hotel Management", "Cost Control", "Guest Services", "Leadership"],
    },
    {
        role: "Guest Service Agent",
        company: "Jebel Ali Hotels & Resorts",
        location: "UAE",
        period: "2013",
        description: "Provided exceptional front-desk service, managing check-ins, check-outs, and guest inquiries. Resolved guest issues promptly to ensure a positive experience.",
        achievements: [
            "Provided exceptional front-desk service, managing check-ins, check-outs, and guest inquiries.",
            "Resolved guest issues promptly to ensure a positive experience.",
            "Gained valuable experience in a high-volume, luxury resort environment.",
        ],
        skills: ["Front-desk Operations", "Guest Relations", "Problem Solving", "Luxury Service"],
    },
    {
        role: "Assistant F&B Manager",
        company: "Heritage Village Resort",
        location: "India",
        period: "2010 – 2013",
        description: "Supported the F&B Manager in overseeing restaurant, bar, and banquet operations. Contributed to menu planning and pricing strategies.",
        achievements: [
            "Supported the F&B Manager in overseeing restaurant, bar, and banquet operations.",
            "Contributed to menu planning and pricing strategies.",
            "Managed staff schedules and supervised service quality.",
        ],
        skills: ["F&B Management", "Menu Planning", "Banquet Operations", "Service Quality"],
    },
    {
        role: "Restaurant Manager",
        company: "Club Mahindra Resort",
        location: "India",
        period: "2006 – 2010",
        description: "Managed a high-volume resort restaurant, focusing on operational efficiency and customer satisfaction. Trained and mentored a team of servers and kitchen staff.",
        achievements: [
            "Managed a high-volume resort restaurant, focusing on operational efficiency and customer satisfaction.",
            "Trained and mentored a team of servers and kitchen staff.",
            "Played a key role in inventory control and food cost management.",
        ],
        skills: ["Restaurant Operations", "Team Mentoring", "Inventory Control", "Customer Satisfaction"],
    },
    {
        role: "Restaurant Supervisor",
        company: "Hotel Failaka",
        location: "India",
        period: "2004 – 2006",
        description: "Supervised dining room staff to ensure excellent service delivery. Handled guest complaints and provided on-the-floor support during peak hours.",
        achievements: [
            "Supervised dining room staff to ensure excellent service delivery.",
            "Handled guest complaints and provided on-the-floor support during peak hours.",
            "Assisted with opening and closing procedures.",
        ],
        skills: ["Dining Supervision", "Guest Complaint Resolution", "Peak Hour Management", "Service Delivery"],
    },
];

const ExperienceCard = ({ experience, index, isLast }: { experience: (typeof experiences)[0], index: number, isLast: boolean }) => (
    <div className="flex items-start">
        <div className="flex flex-col items-center mr-6">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-full text-primary font-bold text-lg">
                    {index + 1}
                </div>
            </div>
            {!isLast && <div className="w-px h-full bg-primary/20 mt-2"></div>}
        </div>
        <div className="flex-grow">
            <Collapsible defaultOpen={index < 2}>
                <Card className="overflow-hidden border-t-4 border-primary/50 shadow-md">
                    <CardHeader className="p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{experience.role}</h3>
                                    <p className="text-md text-muted-foreground">{experience.company}</p>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4" />
                                            <span>{experience.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4" />
                                            <span>{experience.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm data-[state=open]:[&>svg]:rotate-180">
                                    <span className="hidden sm:inline">Show Less</span>
                                    <span className="inline sm:hidden">Less</span>
                                    <ChevronDown className="h-4 w-4 transition-transform" />
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                    </CardHeader>
                    <CollapsibleContent>
                        <CardContent className="p-6 pt-0 space-y-6">
                            <p className="text-foreground/80">{experience.description}</p>
                            
                            <div className="p-6 bg-secondary/70 rounded-xl">
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                                    <Award className="h-5 w-5 text-primary" />
                                    Key Achievements
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    {experience.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="p-6 bg-accent/10 rounded-xl">
                                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-accent-foreground">
                                    <Lightbulb className="h-5 w-5 text-accent" />
                                    Core Skills Applied
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {experience.skills.map((skill, i) => (
                                        <Badge key={i} variant="outline" className="bg-background text-foreground">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </CollapsibleContent>
                </Card>
            </Collapsible>
        </div>
    </div>
);


export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-secondary">
      <SectionTitle className="text-foreground">Work Experience</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
            <ExperienceCard 
                key={index}
                experience={exp} 
                index={index} 
                isLast={index === experiences.length - 1} 
            />
        ))}
      </div>
    </Section>
  );
}
