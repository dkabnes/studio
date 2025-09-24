import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Download, MapPin } from "lucide-react";
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
    <section id="home" className="relative w-full overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-accent/30 rounded-full mix-blend-lighten filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-1/4 w-[1000px] h-[1000px] bg-accent/30 rounded-full mix-blend-lighten filter blur-3xl animate-pulse-slow animation-delay-4000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen pt-28 pb-16">
          <div className="space-y-6">
            <Badge variant="outline" className="gap-2 pl-2 pr-3 py-1 text-sm bg-primary-foreground/10 border-primary-foreground/50 text-accent">
                <MapPin className="h-4 w-4" />
                Kuwait • UAE • Canada • India
            </Badge>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-primary-foreground/80">Hello, I'm</p>
              <div className="inline-block bg-gradient-to-r from-accent/20 via-primary/10 to-transparent p-2 rounded-lg">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-accent">
                  Denial Abnes
                </h1>
              </div>
              <p className="text-2xl md:text-3xl font-medium text-primary-foreground/80">
                Hospitality Professional
              </p>
              <p className="max-w-xl text-primary-foreground/70 md:text-lg">
                14+ years of excellence in restaurant and hotel management across international markets. Transforming hospitality experiences through strategic leadership and operational innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-white/10 text-white border-none">{skill}</Badge>
                ))}
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-white">
                <a href="https://www.dropbox.com/scl/fi/ov2u0427dt96amqk95zkt/DA-RESUME-UPDATE-ONLINE.pdf?rlkey=ak873ihkisxviodvhn9b28y3k&st=fso4uh1m&dl=1" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {profileImage && (
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-accent/70 via-primary/10 to-transparent shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary">
                        <Image
                            src={profileImage.imageUrl}
                            alt={profileImage.description}
                            data-ai-hint={profileImage.imageHint}
                            width={400}
                            height={400}
                            className="relative object-cover object-[-10px_0px] w-full h-full scale-125"
                            priority
                        />
                    </div>
                </div>
                
                <div className="absolute top-2 -right-2">
                    <div className="p-2 bg-primary/80 backdrop-blur-sm rounded-xl flex items-center gap-2 border border-white/20 shadow-lg">
                        <p className="text-xl font-bold text-accent">14+</p>
                        <p className="text-xs text-primary-foreground/80 leading-tight">Years</p>
                    </div>
                </div>

                 <div className="absolute bottom-4 -left-12">
                    <div className="px-4 py-2 bg-primary/80 backdrop-blur-sm rounded-full flex items-center gap-3 border border-white/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <div>
                            <p className="font-semibold text-sm text-white">Available for Projects</p>
                            <p className="text-xs text-primary-foreground/60">Remote & On-site</p>
                        </div>
                    </div>
                 </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground text-center">
                {stats.map((stat, index) => (
                    <div key={index}>
                        <p className="text-5xl font-bold text-accent">{stat.value}</p>
                        <p className="text-lg text-primary-foreground/70">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
