import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GameTwelveTimeline from "@/components/GameTwelveTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, BookOpen, Star, TrendingUp, Award, Target, Clock } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-recruiting.jpg";

const Index = () => {
  const { getFieldValue } = useContent();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>College Recruiting Guide for Parents | Early Preparation Resources</title>
        <meta name="description" content="Complete college recruiting knowledge hub for parents. Free resources, expert insights, and proven strategies to help your athlete start early and succeed." />
        <meta name="keywords" content="college recruiting, student athlete, scholarships, recruiting expert, college sports, athletic recruiting, Thomas Anderson" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent opacity-95"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                <h1 className="mb-6 animate-fade-in">
                  The College Recruiting Knowledge Hub for Parents
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 animate-slide-up">
                  Practical guidance, expert insights, and real stories to help you start early and make confident decisions for your athlete's future.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  After 31 years guiding 2,200+ student-athletes to college success, I've learned what separates prepared families from overwhelmed ones. It's not talent, it's having the right strategy at the right time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
                  <Button className="btn-gold text-lg px-8 py-4">Discover the Early Advantage</Button>
                </div>
                
              </div>
            </div>
          </section>

          {/* Principles Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">The Game 12: Core Framework for Every Family</h2>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    Most families think recruiting is just about talent. Here's the truth: it's about strategy. These 12 principles represent everything I've learned in 31 years - normally this would cost thousands in consulting fees. Today, it's yours free.
                  </p>
                </div>
                <GameTwelveTimeline />
              </div>
            </div>
          </section>

          {/* Authority Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">Three Decades of Recruiting Success</h2>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    After 31 years in college recruiting, running one of the most respected college placement agencies — University Sports Program (USP) — I built this resource center to give families what I always wished every parent had: clear information, proven strategies, and real stories, all in one place they can trust.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent-foreground">31+</span>
                      </div>
                      <p className="font-semibold text-primary mb-2">Years Experience</p>
                      <p className="text-sm text-muted-foreground">Guiding student-athletes and families</p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-accent-foreground">2,200</span>
                      </div>
                      <p className="font-semibold text-primary mb-2">Athletes Placed</p>
                      <p className="text-sm text-muted-foreground">Successfully placed in colleges</p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-accent-foreground">$185M</span>
                      </div>
                      <p className="font-semibold text-primary mb-2">Saved in Costs</p>
                      <p className="text-sm text-muted-foreground">Tuition and academic costs saved</p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-accent-foreground">250</span>
                      </div>
                      <p className="font-semibold text-primary mb-2">Universities</p>
                      <p className="text-sm text-muted-foreground">With placed athletes</p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-accent-foreground">15K</span>
                      </div>
                      <p className="font-semibold text-primary mb-2">Families Served</p>
                      <p className="text-sm text-muted-foreground">Accessing these resources annually</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Book Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-accent mb-4 font-semibold">The Ultimate College Recruiting Strategy Guide</p>
                  <h2 className="mb-6 text-primary">Dream Big, Play Hard. The Heart and Soul of College Recruiting</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    If you'd like a complete, step-by-step roadmap, my book Dream Big, Play Hard brings together real stories, proven strategies, and the exact tools I've used with thousands of athletes.
                  </p>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button className="btn-hero">See what's inside the guide</Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-accent to-accent-muted rounded-lg shadow-2xl flex items-center justify-center hover-lift">
                      <BookOpen className="w-24 h-24 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold text-sm animate-glow-pulse">
                      Available Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Multimedia Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">Your Complete Learning Hub</h2>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                    The best way to learn recruiting is from those who've done it successfully. Here you'll find honest conversations, expert insights, and practical strategies from real families and coaches.
                  </p>
                  <p className="text-lg text-muted-foreground mt-4">
                    Featuring exclusive feedback from leading college coaches and admissions officers from 16 of the nation's top universities.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-primary">Recruiting Unplugged</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Raw, behind-the-scenes conversations about what really works in college recruiting. No scripts, no fluff—just honest insights from families, athletes, and coaches.
                      </p>
                      <Button className="btn-outline w-full">Get the Raw Truth</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-primary">Off the Record</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Honest takes, real insights, no filters. Written perspectives on college recruiting, admissions trends, and what's really happening in college sports.
                      </p>
                      <Button className="btn-outline w-full">Read Latest Articles</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-primary">Speaking Engagements & Conferences</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        I share insights on recruiting strategy and early preparation at key industry events, helping families understand what really works in today's landscape.
                      </p>
                      <Button className="btn-outline w-full">View Upcoming Events</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-primary">The Game 12 Training Series</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Focused lessons that teach each of the 12 principles in detail. Perfect for busy families who want to learn the method efficiently.
                      </p>
                      <Button className="btn-outline w-full">Preview the Method</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Quiz Section */}
          <section className="py-16 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6">How Prepared Is Your Family?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Take this quick assessment to discover where you stand and what steps to take next. Most families are surprised by their results.
                </p>
                <Button className="btn-gold text-lg px-8 py-4">Get My Recruiting Readiness Score</Button>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">Real Success Stories</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Every success story reflects the power of early preparation, smart strategy, and commitment. Meet some of the athletes and parents who reached their goals and how they did it.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-primary">Alex Rodriguez</h4>
                        <p className="text-sm text-muted-foreground">Tennis | Stanford University</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 italic">
                        "Starting early with principle #3 changed everything. The clock of success really does start early."
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-primary">Maya Johnson</h4>
                        <p className="text-sm text-muted-foreground">Soccer | Duke University</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 italic">
                        "Building our dream team with principle #5 made all the difference in our recruiting journey."
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-primary">Jordan Chen</h4>
                        <p className="text-sm text-muted-foreground">Basketball | UCLA</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 italic">
                        "Academic excellence from principle #7 opened doors that talent alone couldn't unlock."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <Button className="btn-hero">See More Success Stories</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Your Complete Recruiting Roadmap</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  You now understand what matters. The earlier you begin, the stronger your athlete's path becomes. Use the tools, read the guide, explore the stories. Let's get your family prepared.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button className="btn-hero text-lg px-8 py-4">Read the Book</Button>
                  <Button className="btn-outline text-lg px-8 py-4">Access all Free Resources</Button>
                  <Button className="btn-outline text-lg px-8 py-4">Have Questions? Contact Thomas</Button>
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

export default Index;