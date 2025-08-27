import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Video, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>College Recruiting Resources | Podcast, Videos & Articles</title>
        <meta name="description" content="Complete learning hub for college recruiting. Podcast episodes, expert videos, articles, and speaking insights to help families navigate early preparation successfully." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">Your Complete Learning Hub</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  Raw, unfiltered content on college recruiting. No scripts, no fluff—just honest insights from 31 years of experience.
                </p>
              </div>
            </div>
          </section>

          {/* Podcast Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mic className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Recruiting Unplugged</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Raw, behind-the-scenes conversations about what really works in college recruiting. No scripts, no fluff—just honest insights from families, athletes, and coaches.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Featuring exclusive feedback from leading college coaches and admissions officers from 16 of the nation's top universities.
                  </p>
                  <Button className="btn-gold">Get the Raw Truth</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Off the Record</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 font-semibold">
                    Honest Takes. Real Insights. No Filters.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Welcome to Off the Record, a written space where I share unfiltered perspectives on college recruiting, student-athlete development, admissions trends, and the evolving landscape of college sports.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Here, you'll find articles, reflections, and thought pieces that go beyond the surface, informed by decades of experience, shaped by real conversations, and focused on what truly matters to families, athletes, and educators.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Whether you're a parent navigating the process, a student-athlete looking for direction, or a professional in the field, this is where we talk about what's really happening—off the record.
                  </p>
                  <Button className="btn-gold">Read Latest Articles</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Conferences and Events Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-12 text-primary">Speaking Engagements & Conferences</h2>
                <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  I share insights on recruiting strategy and early preparation at key industry events, helping families understand what really works in today's landscape.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Upcoming Event</h3>
                    <p className="text-muted-foreground mb-4">
                      "Early Recruiting Success" - High School Athletic Director Conference
                    </p>
                    <Button className="btn-outline w-full">See Event Details</Button>
                  </div>
                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Popular Topic</h3>
                    <p className="text-muted-foreground mb-4">
                      "Parent's Guide to Supporting Their Student-Athlete"
                    </p>
                    <Button className="btn-outline w-full">See Event Details</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-center mb-12 text-primary">The Game 12 Training Series</h2>
                <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Focused lessons that teach each of the 12 principles in detail. Perfect for busy families who want to learn the method efficiently.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Principle #1: Your Only Rival is Yourself</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Building unshakeable self-confidence and focus
                    </p>
                    <Button className="btn-outline w-full">Watch Now</Button>
                  </div>
                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Principle #3: The Clock of Success Starts Early</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Why freshman year planning changes everything
                    </p>
                    <Button className="btn-outline w-full">Watch Now</Button>
                  </div>
                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Principle #7: Academic Excellence Powers Recruiting</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      How grades open doors that talent alone cannot
                    </p>
                    <Button className="btn-outline w-full">Watch Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Stay Updated</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get the latest recruiting insights, podcast episodes, and educational 
                  content delivered directly to your inbox.
                </p>
                <div className="max-w-md mx-auto">
                  <Button className="btn-hero w-full">Subscribe to Newsletter</Button>
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

export default Media;