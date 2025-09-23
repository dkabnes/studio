
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Globe, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate hospitality leader with a proven track record of transforming operations, 
            building exceptional teams, and delivering unforgettable guest experiences across diverse markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-hero-gradient rounded-lg blur-sm opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Card className="relative glass border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-hero-gradient rounded-full"></div>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="glass border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-glow/10 rounded-xl group-hover:bg-primary-glow/20 transition-colors duration-300">
                      <Globe className="h-6 w-6 text-primary-glow" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">International Experience</div>
                      <div className="text-2xl font-bold text-primary-glow">4 Countries</div>
                      <div className="text-xs text-muted-foreground mt-1">Kuwait • UAE • Canada • India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-foreground">Team Leadership</div>
                      <div className="text-2xl font-bold text-accent">200+</div>
                      <div className="text-xs text-muted-foreground mt-1">Staff Members Managed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-hero-gradient rounded-full"></div>
              Education & Qualifications
            </h3>

            <div className="space-y-6">
              <Card className="glass border-0 shadow-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-hero-gradient"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary-glow/10 rounded-xl group-hover:bg-primary-glow/20 group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="h-8 w-8 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-foreground mb-2">MBA in Hotel Management</h4>
                      <p className="text-primary-glow font-medium text-lg mb-1">Himalayan University</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="px-3 py-1 bg-primary-glow/10 rounded-full text-xs font-medium text-primary-glow">2020</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Specialized in strategic hospitality management, financial planning, 
                        and international business operations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-0 shadow-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-foreground mb-2">Bachelor's in Business Administration</h4>
                      <p className="text-accent font-medium text-lg mb-1">Madurai Kamaraj University</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent">2008</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Foundation in business principles, management theory, and organizational behavior.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Philosophy */}
            <Card className="glass border-0 shadow-elegant bg-hero-gradient relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="p-8 relative z-10">
                <div className="text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-display font-semibold text-2xl mb-4">My Philosophy</h4>
                  <div className="w-12 h-0.5 bg-white/50 mx-auto mb-6"></div>
                  <p className="text-white/95 italic text-lg leading-relaxed max-w-md mx-auto">
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
