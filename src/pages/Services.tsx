import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Personal Recruiting Guidance | When You Need Extra Support</title>
        <meta name="description" content="For families wanting personalized support beyond our free resources. Limited one-on-one guidance for early recruiting preparation with Thomas Anderson." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">Personal Recruiting Guidance for Early Preparation</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  Most parents begin with our free resources. When you want tailored, one-on-one guidance for your athlete's unique path, my Pre-Recruiting Mentorship program is available for a limited number of families each year.
                </p>
              </div>
            </div>
          </section>

          {/* Sports Recruiting Process Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">How Personal Guidance Works</h2>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                The process is divided into clear, strategic stages—each guided directly by me to ensure personalized planning and real progress.
              </p>
              <div className="max-w-6xl mx-auto space-y-8">
                
                <div className="card-elegant">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent-foreground">1</span>
                    </div>
                    <div>
                      <h3 className="mb-4 text-primary">Stage 1: Foundation</h3>
                      <p className="text-muted-foreground mb-4">
                        Building self-awareness, mindset, and academic-athletic direction. We develop a winning mindset, set personal and athletic goals, and help you understand what colleges are looking for while creating your recruitment timeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent-foreground">2</span>
                    </div>
                    <div>
                      <h3 className="mb-4 text-primary">Stage 2: Preparation</h3>
                      <p className="text-muted-foreground mb-4">
                        Building a strong student-athlete profile. We focus on academic performance optimization, strategic extracurricular activities and leadership development, plus strategic college selection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-accent-foreground">3</span>
                    </div>
                    <div>
                      <h3 className="mb-4 text-primary">Stage 3: Readiness</h3>
                      <p className="text-muted-foreground mb-4">
                        Shaping your recruiting image and communication skills. We review progress across all goals, prepare presentation materials (resume, video), evaluate your digital presence, and practice advanced coach communication strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Is This Program Right for Your Family?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  This mentorship is designed for families who:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="card-elegant text-center">
                    <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Understand the value of starting early (ages 14-16)
                    </p>
                  </div>
                  <div className="card-elegant text-center">
                    <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Are committed to following a structured, proven approach
                    </p>
                  </div>
                  <div className="card-elegant text-center">
                    <CheckCircle className="w-8 h-8 text-success mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Want personalized guidance from someone with 31 years of experience
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Due to the intensive nature of this program, availability is extremely limited.
                </p>
                <Button className="btn-hero">Learn About Availability</Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;