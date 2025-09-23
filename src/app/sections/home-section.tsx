import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, MapPin, Briefcase, Award } from "lucide-react";

const stats = [
    { icon: Briefcase, value: "14+ Years", label: "Experience" },
    { icon: Award, value: "Top Performer", label: "Solo Management" },
    { icon: MapPin, value: "4 Countries", label: "Worked In" },
]

export default function HomeSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary text-primary-foreground pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Denial Abnes
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-primary-foreground/80">
                Expert in Hospitality Leadership & Management
                </p>
                <p className="max-w-[600px] text-primary-foreground/70 md:text-xl">
                A seasoned professional driving excellence in restaurant and hotel operations through strategic leadership, financial acumen, and a deep commitment to guest satisfaction.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#projects">
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="mt-8 pt-6 border-t border-primary-foreground/30">
                <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="p-2 bg-primary-foreground/10 rounded-full">
                                <stat.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-lg font-bold">{stat.value}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center -order-1 lg:order-1">
            {profileImage && (
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/50 to-primary/50 rounded-full blur-3xl"></div>
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  width={500}
                  height={500}
                  className="relative object-cover rounded-full border-8 border-background/20 shadow-2xl w-full h-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
