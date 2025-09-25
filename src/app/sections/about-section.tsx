import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Globe, Users, Heart, PlayCircle } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Video and Journey Section */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <PlayCircle className="h-16 w-16 mx-auto mb-2 text-primary/30" />
                      <p className="font-medium">Your video will be here</p>
                      <p className="text-sm">16:9 Aspect Ratio</p>
                    </div>
                  </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-8">
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
                  </div>
                </CardContent>
              </Card>
          </div>
          
          {/* Education and Stats Section */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Education & Qualifications
            </h3>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl text-foreground mb-2">MBA in Hotel Management</h4>
                    <p className="text-accent font-medium text-lg mb-1">Himalayan University</p>
                    <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent inline-block">2020</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xl text-foreground mb-2">Bachelor's in Business Administration</h4>
                    <p className="text-accent font-medium text-lg mb-1">Madurai Kamaraj University</p>
                    <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent inline-block">2008</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">International</div>
                      <div className="text-2xl font-bold text-accent">4 Countries</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">Leadership</div>
                      <div className="text-2xl font-bold text-accent">200+ Staff</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 bg-philosophy-gradient">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-2xl mb-4">My Philosophy</h4>
                <div className="w-12 h-0.5 bg-white/50 mx-auto mb-6"></div>
                <p className="italic text-lg leading-relaxed max-w-md mx-auto">
                  "Great hospitality is not just about service—it's about creating moments 
                  that guests remember long after they leave. Success comes from empowering 
                  teams to exceed expectations every single day."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
