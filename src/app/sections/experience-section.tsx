import { Section, SectionTitle } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Food Service Supervisor/Manager",
        company: "Chuck’s Road House",
        location: "Sault, Canada",
        period: "2024 – 2025",
        details: [
            "Supervise and coordinate activities of food service staff.",
            "Ensure compliance with health and safety regulations.",
            "Maintain high standards of food quality and presentation.",
            "Train new employees and provide ongoing training for existing staff."
        ],
    },
    {
        role: "Restaurant Manager",
        company: "Solo Management Co.",
        location: "Mirqab, Kuwait",
        period: "2018 – 2024",
        details: [
            "Managed daily operations, ensuring seamless service and high standards of quality.",
            "Developed and implemented strategies that significantly boosted sales, even during the COVID-19 pandemic.",
            "Oversaw staff training, financial planning, and inventory management.",
        ],
    },
    {
        role: "Assistant General Manager",
        company: "Royal Goans Beach Club",
        location: "India",
        period: "2016",
        details: [
            "Led the pre-opening and reopening team, overseeing interior design, staffing, and procurement.",
            "Developed budget forecasts and established operational workflows for the newly opened club.",
            "Assisted in all aspects of management to ensure a successful launch.",
        ],
    },
    {
        role: "General Manager",
        company: "The Sapphire Comfort Hotel",
        location: "India",
        period: "2013 – 2015",
        details: [
            "Directed all hotel operations, including guest services, housekeeping, and F&B departments.",
            "Implemented cost-control measures that improved profitability without compromising guest satisfaction.",
            "Championed a culture of excellence and continuous improvement among staff.",
        ],
    },
    {
        role: "Guest Service Agent",
        company: "Jebel Ali Hotels & Resorts",
        location: "UAE",
        period: "2013",
        details: [
            "Provided exceptional front-desk service, managing check-ins, check-outs, and guest inquiries.",
            "Resolved guest issues promptly to ensure a positive experience.",
            "Gained valuable experience in a high-volume, luxury resort environment.",
        ],
    },
    {
        role: "Assistant F&B Manager",
        company: "Heritage Village Resort",
        location: "India",
        period: "2010 – 2013",
        details: [
            "Supported the F&B Manager in overseeing restaurant, bar, and banquet operations.",
            "Contributed to menu planning and pricing strategies.",
            "Managed staff schedules and supervised service quality.",
        ],
    },
    {
        role: "Restaurant Manager",
        company: "Club Mahindra Resort",
        location: "India",
        period: "2006 – 2010",
        details: [
            "Managed a high-volume resort restaurant, focusing on operational efficiency and customer satisfaction.",
            "Trained and mentored a team of servers and kitchen staff.",
            "Played a key role in inventory control and food cost management.",
        ],
    },
    {
        role: "Restaurant Supervisor",
        company: "Hotel Failaka",
        location: "India",
        period: "2004 – 2006",
        details: [
            "Supervised dining room staff to ensure excellent service delivery.",
            "Handled guest complaints and provided on-the-floor support during peak hours.",
            "Assisted with opening and closing procedures.",
        ],
    },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" className="bg-secondary">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((exp, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center gap-4 text-left">
                  <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} | {exp.location} ({exp.period})
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-foreground/80">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
