import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Contact Thomas Anderson | Questions About College Recruiting</title>
        <meta name="description" content="Have questions about athletic recruiting? Contact Thomas Anderson for help with resources, book inquiries, speaking events, and recruiting guidance." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">Have Questions About College Recruiting? Contact Thomas Anderson Today</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  I respond personally to inquiries about my book, upcoming courses, speaking engagements, and media opportunities. For recruiting mentorship, please note that availability is extremely limited.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <div className="card-elegant">
                  <h2 className="mb-6 text-primary">Contact and Connect With Me Directly</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out this short form and I'll get back to you personally as soon as possible.
                  </p>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Sport / Non-athlete
                      </label>
                      <Input placeholder="What sport or 'Non-athlete'" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        High school graduation date
                      </label>
                      <Input placeholder="Enter graduation year" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Relationship with the athlete (optional)
                      </label>
                      <Input placeholder="Parent, Student, Coach, etc." />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message or specific questions *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your situation, goals, and how we can help..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="btn-hero w-full">Send Message</Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="card-elegant">
                    <h3 className="mb-6 text-primary">Prefer to Reach Out Another Way?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Phone</p>
                          <p className="text-muted-foreground">+1 (786) 234-6478</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <p className="text-muted-foreground">contact@andersoncollegesports.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Location</p>
                          <p className="text-muted-foreground">Based in Miami, serving athletes worldwide</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Hours</p>
                          <p className="text-muted-foreground">
                            Monday to Friday, 9:00 a.m. – 6:00 p.m. (EST)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h2 className="text-primary">Have Questions? I've Got Answers for You</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">When Should We Start the Recruiting Process?</h3>
                    <p className="text-muted-foreground">
                      The earlier the better - ideally when your athlete is 14-16. Starting early gives families time to prepare properly.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">What's the Best Way to Get Started?</h3>
                    <p className="text-muted-foreground">
                      Begin with our free resources: take the quiz, explore the Learning Hub, and read success stories to understand the process.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">How Can I Access All the Free Resources?</h3>
                    <p className="text-muted-foreground">
                      Everything is available on this site: videos, articles, podcast episodes, and downloadable guides - all at no cost.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">Is Personal Guidance Really Necessary?</h3>
                    <p className="text-muted-foreground">
                      Most families find our free resources sufficient. Personal guidance is only for those wanting customized support for specific situations.
                    </p>
                  </div>

                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">Can I Ask Questions About the Book?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! Whether you want to know more about the book content, ordering, or how it fits your family's needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-8 text-primary">Quick Links to Get Started</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card-elegant text-center">
                    <h3 className="mb-4 text-primary">Learn About the Book</h3>
                    <Button className="btn-outline w-full">Explore the Book</Button>
                  </div>
                  <div className="card-elegant text-center">
                    <h3 className="mb-4 text-primary">Watch Free Videos</h3>
                    <Button className="btn-outline w-full">Go to Media Page</Button>
                  </div>
                  <div className="card-elegant text-center">
                    <h3 className="mb-4 text-primary">Schedule a Consultation</h3>
                    <Button className="btn-gold w-full">Book Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-8 text-primary">Follow Me on Social Media</h2>
                <div className="flex justify-center gap-6">
                  <Button className="btn-outline">LinkedIn</Button>
                  <Button className="btn-outline">Instagram</Button>
                  <Button className="btn-outline">TikTok</Button>
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

export default Contact;