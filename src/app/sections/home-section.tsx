import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
    { value: "14+", label: "Years Experience" },
    { value: "4", label: "Countries" },
    { value: "50+", label: "Projects Led" },
];

const skills = ["Strategic Leadership", "Operational Excellence", "Team Building"];

export default function HomeSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-background">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen pt-28 pb-16">
          <div className="space-y-6">
            <Badge variant="outline" className="gap-2 pl-2 pr-3 py-1 text-sm bg-secondary border-primary/50 text-primary">
                <MapPin className="h-4 w-4" />
                Kuwait • UAE • Canada • India
            </Badge>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-foreground/80">Hello, I'm</p>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-primary">
                Denial Abnes
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-foreground/80">
                Hospitality Professional
              </p>
              <p className="max-w-xl text-foreground/60 md:text-lg">
                14+ years of excellence in restaurant and hotel management across international markets. Transforming hospitality experiences through strategic leadership and operational innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                ))}
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="#about">
                  Discover My Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {profileImage && (
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  width={400}
                  height={400}
                  className="relative object-cover object-[-8px_top] rounded-full border-8 border-background shadow-2xl w-full h-full scale-125"
                  priority
                />
                
                <div className="absolute top-2 -right-2">
                    <div className="p-2 bg-background/50 backdrop-blur-sm rounded-xl flex items-center gap-2 border shadow-lg">
                        <p className="text-xl font-bold text-primary">14+</p>
                        <p className="text-xs text-foreground/80 leading-tight">Years</p>
                    </div>
                </div>

                 <div className="absolute bottom-4 right-0 translate-x-4">
                    <div className="px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full flex items-center gap-3 border">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <div>
                            <p className="font-semibold text-sm">Available for Projects</p>
                            <p className="text-xs text-foreground/60">Remote & On-site</p>
                        </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-foreground text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <p className="text-5xl font-bold text-primary">{stat.value}</p>
                        <p className="text-lg text-foreground/70">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
