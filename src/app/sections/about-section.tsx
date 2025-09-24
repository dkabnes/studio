import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Globe, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Passionate hospitality leader with a proven track record of transforming operations, 
            building exceptional teams, and delivering unforgettable guest experiences across diverse markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
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
                    
                    <p className="leading-relaxed">
                      Throughout my career, I've successfully led restaurant openings, managed large-scale operations, 
                      and implemented systems that consistently improve both guest satisfaction and business performance. 
                      My passion lies in mentoring teams and creating sustainable operational frameworks.
                    </p>
                  </div>
                </CardContent>
              </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">International Experience</div>
                      <div className="text-2xl font-bold text-primary">4 Countries</div>
                      <div className="text-xs text-muted-foreground mt-1">Kuwait • UAE • Canada • India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">Team Leadership</div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-xs text-muted-foreground mt-1">Staff Members Managed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Education & Qualifications
            </h3>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-foreground mb-2">MBA in Hotel Management</h4>
                      <p className="text-primary font-medium text-lg mb-1">Himalayan University</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">2020</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Specialized in strategic hospitality management, financial planning, 
                        and international business operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-foreground mb-2">Bachelor's in Business Administration</h4>
                      <p className="text-primary font-medium text-lg mb-1">Madurai Kamaraj University</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">2008</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Foundation in business principles, management theory, and organizational behavior.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-t from-primary to-primary/80 via-accent/20 text-primary-foreground">
              <CardContent className="p-8">
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
      </div>
    </section>
  );
};

export default AboutSection;
