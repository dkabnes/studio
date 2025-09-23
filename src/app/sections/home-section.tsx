import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, MapPin, Briefcase, Award } from "lucide-react";

const stats = [
    { icon: Briefcase, value: "14+ Years", label: "Experience" },
    { icon: Award, value: "Top Performer", label: "Solo Management" },
    { icon: MapPin, value: "4 Countries", label: "Worked In" },
];

export default function HomeSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-background -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-20 md:py-28">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-headline">
                Hello, I&apos;m Denial Abnes
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-accent">
                Expert in Hospitality Leadership & Management
              </p>
              <p className="max-w-2xl text-primary-foreground/80 md:text-xl">
                A seasoned professional driving excellence in restaurant and hotel operations through strategic leadership, financial acumen, and a deep commitment to guest satisfaction.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
              <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#projects">
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {profileImage && (
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full blur-3xl opacity-60"></div>
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  width={400}
                  height={400}
                  className="relative object-cover rounded-full border-8 border-background/20 shadow-2xl w-full h-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
        <div className="pb-16">
            <div className="w-full max-w-5xl mx-auto p-8 bg-background/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-center gap-4">
                            <div className="p-3 bg-primary-foreground/10 rounded-full">
                                <stat.icon className="h-7 w-7 text-accent" />
                            </div>
                            <div className="text-left">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}