import Image from "next/image";
import { Section, SectionTitle } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

type Project = {
  title: string;
  description: string;
  image: ImagePlaceholder | undefined;
};

const projects: Project[] = [
  {
    title: "Reopening Royal Goans Beach Club",
    description: "Spearheaded the complete pre-opening phase, from interior design concepts and staffing to purchasing and comprehensive budget forecasting, ensuring a successful and seamless launch.",
    image: PlaceHolderImages.find(p => p.id === 'project-royal-goans'),
  },
  {
    title: "Turnaround during COVID-19",
    description: "Innovated at Solo Management Co. by introducing car dining services and forging strategic delivery partnerships, successfully reversing a sales decline and driving growth during a challenging period.",
    image: PlaceHolderImages.find(p => p.id === 'project-solo-mgmt'),
  },
  {
    title: "Operational Leadership at Abu Hasaniya",
    description: "Took charge of a newly opened restaurant, implementing strategic initiatives that dramatically improved operational efficiency and drove significant sales growth from the ground up.",
    image: PlaceHolderImages.find(p => p.id === 'project-abu-hasaniya'),
  },
  {
    title: "Sustained Sales Excellence at Pizzabar",
    description: "Demonstrated exceptional performance by consistently surpassing monthly sales targets for three consecutive months at Pizzabar in Threesixty Mall, significantly contributing to revenue growth.",
    image: PlaceHolderImages.find(p => p.id === 'project-pizzabar'),
  }
];

export default function ProjectsSection() {
  return (
    <Section id="projects" className="bg-secondary">
      <SectionTitle>Notable Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col group">
            {project.image && (
              <div className="overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
