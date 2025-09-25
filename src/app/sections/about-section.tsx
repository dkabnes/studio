
import { Card, CardContent } from '@/components/ui/card';
import { Heart, PlayCircle, Video } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Passionate hospitality leader with a proven track record of transforming operations, 
            building exceptional teams, and delivering unforgettable guest experiences across diverse markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          {/* Left Column: Video and Philosophy */}
          <div className="lg:col-span-3 flex flex-col space-y-8">
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YQzB69n88jQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
                    </iframe>
                  </div>
                </CardContent>
            </Card>
            <div className="flex items-start gap-4 text-foreground">
              <Video className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
              <div>
                <h4 className="font-semibold text-lg">A Glimpse into My Journey</h4>
                <p className="text-muted-foreground">Watch this short video to learn more about my passion for hospitality and my approach to leadership.</p>
              </div>
            </div>
            <Card className="bg-primary text-primary-foreground mt-auto">
              <CardContent className="p-6 bg-philosophy-gradient flex flex-col justify-center items-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-xl mb-2">My Philosophy</h4>
                  <div className="w-10 h-0.5 bg-white/50 mx-auto mb-4"></div>
                  <p className="italic text-md leading-relaxed max-w-md mx-auto">
                    "Great hospitality is not just about service—it's about creating moments 
                    that guests remember long after they leave. Success comes from empowering 
                    teams to exceed expectations every single day."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column: My Journey */}
          <div className="lg:col-span-2">
            <Card className="h-full">
                <CardContent className="p-8 h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    My Journey in Hospitality
                  </h3>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="leading-relaxed">
                      With over 14 years of experience spanning four countries, I've dedicated my career to 
                      excellence in hospitality management. My journey began in India and has taken me across 
                      international markets including Kuwait, UAE, and Canada.
                    </p>
                    <p className="leading-relaxed">
                      I specialize in operational leadership, team development, and strategic planning. My approach 
                      combines data-driven decision making with a deep understanding of guest psychology and cultural 
                      nuances across different markets.
                    </p>
                     <p className="leading-relaxed">
                      From spearheading hotel pre-openings to navigating the challenges of a global pandemic, 
                      I thrive on transforming complex challenges into success stories. My goal is always to build
                      resilient operations and mentor teams that deliver exceptional service, no matter the context.
                    </p>
                  </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
