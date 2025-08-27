import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, BookOpen, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Dream Big, Play Hard. The Heart and Soul of College Recruiting by Thomas Anderson</title>
        <meta name="description" content='"Dream Big Play Hard" is the ultimate guide for student-athletes and families to navigate college recruiting with strategy, motivation, and clarity.' />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className="mb-6 animate-fade-in">Dream Big Play Hard - The Complete Guide</h1>
                  <p className="text-xl leading-relaxed mb-8 animate-slide-up">
                    "Dream Big, Play Hard" brings together all the insights from this knowledge hub into one comprehensive guide. Perfect for families who want everything compiled in one place they can reference anytime.
                  </p>
                  <p className="text-lg mb-8 opacity-90">
                    If our free resources have been valuable to your family, this book is a natural next step that also supports the continued growth of this knowledge hub.
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-lg">5 STARS RATING</span>
                  </div>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button className="btn-gold">
                      Get Your Copy on Amazon <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="btn-outline">Take a Look Inside</Button>
                  </div>
                </div>
                <div className="order-1 lg:order-2 text-center">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-accent to-accent-muted rounded-lg shadow-2xl flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold text-sm">
                      #1 Bestseller
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Book Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">What's inside "Dream Big Play Hard"</h2>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                This book blends real stories, practical tools, and proven strategies that every family needs to confidently navigate the college recruiting process.
              </p>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                
                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">Master the Recruiting Process</h3>
                  <p className="text-muted-foreground">
                    Step-by-step guidance to navigate college sports recruiting with confidence.
                  </p>
                </div>

                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">Scholarship Strategies</h3>
                  <p className="text-muted-foreground">
                    How to maximize athletic and academic aid opportunities.
                  </p>
                </div>

                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">What Coaches Really Want</h3>
                  <p className="text-muted-foreground">
                    Insights into the traits and skills that make you stand out.
                  </p>
                </div>

                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">The Academic Edge</h3>
                  <p className="text-muted-foreground">
                    Why grades and course choices can make or break opportunities.
                  </p>
                </div>

                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">Building Your Personal Brand</h3>
                  <p className="text-muted-foreground">
                    Using leadership, extracurriculars, and social media to your advantage.
                  </p>
                </div>

                <div className="card-elegant">
                  <h3 className="mb-4 text-primary">International Athlete Advantage</h3>
                  <p className="text-muted-foreground">
                    How global talent is reshaping U.S. college sports.
                  </p>
                </div>

                <div className="card-elegant md:col-span-2">
                  <h3 className="mb-4 text-primary">Beyond Athletics</h3>
                  <p className="text-muted-foreground">
                    Understanding admissions, rankings, and life after sports.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">Take a Look Inside My Book</h2>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Get a sneak peek at select pages from the book. Each one designed to inspire action and provide real value from page one.
              </p>
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-card border border-card-border rounded-lg p-8">
                  <p className="text-muted-foreground italic">
                    Preview content will be embedded here - visual PDF pages from the book
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Book Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">What readers say about "Dream Big, Play Hard. The Heart and Soul of College Recruiting"</h2>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                These families, athletes and coaches have felt the impact of the book. Here's what they say after reading it.
              </p>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                
                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "This book changed everything for our family. The Game 12 principles 
                    gave us a clear roadmap when we felt completely lost in the recruiting process."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Sarah M., Parent</div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I wish I had this book when I was recruiting. As a coach, I now recommend 
                    it to every family. The strategies are proven and the results speak for themselves."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Coach Johnson, High School</div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "From a D3 hopeful to a full D1 scholarship - this book's strategies 
                    helped me exceed every expectation I had for my college career."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Marcus T., Student-Athlete</div>
                </div>
              </div>
            </div>
          </section>

          {/* Book Purchase Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">Order Your Copy Today</h2>
              <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Start your recruiting journey with clarity. This book is your roadmap to athletic and academic success.
              </p>
              <div className="max-w-md mx-auto">
                <div className="card-elegant text-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-accent to-accent-muted rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-accent-foreground" />
                  </div>
                  <p className="text-lg font-semibold text-primary mb-4">
                    Get your comprehensive recruiting guide today
                  </p>
                  <Button className="btn-hero w-full">
                    Get Your Copy on Amazon <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
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

export default Book;