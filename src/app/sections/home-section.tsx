import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HomeSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="home" className="w-full pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary font-headline">
              Denial Abnes
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-accent">
              Expert in Hospitality Leadership & Management
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl">
              A seasoned professional with over 14 years of experience, driving excellence in restaurant and hotel operations through strategic leadership, financial acumen, and a deep commitment to guest satisfaction.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={500}
                height={500}
                className="h-80 w-80 rounded-full object-cover border-8 border-background shadow-2xl md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
