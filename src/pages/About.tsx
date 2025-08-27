import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Thomas Anderson | College Recruiting Expert & Knowledge Hub Creator</title>
        <meta name="description" content="Meet Thomas Anderson, creator of the college recruiting knowledge hub. 31 years of experience helping 2,200+ families navigate early recruiting preparation successfully." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">Thomas Anderson, Your Guide to College Recruiting Success</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  I'm Thomas Anderson, and I created this comprehensive resource center because too many families start their recruiting journey confused and overwhelmed. After three decades in this field, I wanted to share everything I've learned in one trusted, accessible place.
                </p>
                <p className="text-lg mt-6 opacity-90">
                  As a former student-athlete who's now guided 2,200+ families, I understand both sides of recruiting. My goal isn't to sell you anything—it's to give you the knowledge and tools that every family deserves to have.
                </p>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-12 text-primary">Career Highlights as a College Recruiter</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="card-elegant">
                    <h3 className="text-accent mb-4">1979-1983: The Student-Athlete Foundation</h3>
                    <p className="text-muted-foreground">
                      Recruited by New Mexico Military Institute and later transferred to New Mexico State University. Bachelor Degree in Business - Marketing.
                    </p>
                  </div>

                  <div className="card-elegant">
                    <h3 className="text-accent mb-4">1984-1993: Professional Development & Tennis Industry Leadership</h3>
                    <p className="text-muted-foreground">
                      Senior Account Executive at Leo-Burnett, Creator of the Lotto Professional Tennis Tour, Founder of the Venezuelan Professional Player's Tennis Association (UTP), TV Sports Analyst.
                    </p>
                  </div>

                  <div className="card-elegant md:col-span-2">
                    <h3 className="text-accent mb-4">1994-Present: University Sports Program & College Recruiting Pioneer</h3>
                    <p className="text-muted-foreground">
                      Founder and CEO of University Sports Program (USP), International Guest speaker (+15 countries), Conducted College Showcases and Camps (9 countries), Head of UTR Business Developer for LATAM, Author of two publications ("7 Steps to Win a College Athletic Scholarship" and "Dream Big, Play Hard: The Heart and Soul of College Recruiting")
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Gallery Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-12 text-primary">My Journey in Pictures</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="aspect-square bg-gradient-to-br from-accent to-accent-muted rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold">Conference Speaking</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">Athlete Guidance</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground rounded-lg flex items-center justify-center">
                    <span className="text-muted font-semibold">University Visits</span>
                  </div>
                </div>
                <p className="text-center text-muted-foreground mt-6">
                  Professional photos showcasing leadership, warmth and expertise in college recruiting
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-12 text-primary">What Families Say About This Approach</h2>
                <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  The true impact of my work lives in the voices of athletes, families, and coaches I've guided. Their trust is my greatest reward.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="card-elegant text-center">
                    <p className="text-muted-foreground mb-4 italic">
                      "Thomas changed our entire approach to recruiting. His guidance was invaluable."
                    </p>
                    <div className="text-primary font-semibold">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">Parent</div>
                  </div>
                  
                  <div className="card-elegant text-center">
                    <p className="text-muted-foreground mb-4 italic">
                      "The Game 12 system works. My athlete got a full scholarship following these principles."
                    </p>
                    <div className="text-primary font-semibold">Coach Johnson</div>
                    <div className="text-sm text-muted-foreground">High School Coach</div>
                  </div>
                  
                  <div className="card-elegant text-center">
                    <p className="text-muted-foreground mb-4 italic">
                      "Professional, knowledgeable, and genuinely cares about student-athlete success."
                    </p>
                    <div className="text-primary font-semibold">Maria Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Student-Athlete</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;