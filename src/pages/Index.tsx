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
        <title>{t('home.hero.title')} | Thomas Anderson</title>
        <meta name="description" content={t('home.hero.subtitle')} />
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
                  {t('home.hero.title')}
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 animate-slide-up">
                  {t('home.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
                  <Button className="btn-gold text-lg px-8 py-4">{t('btn.startJourney')}</Button>
                  <Button className="btn-outline text-lg px-8 py-4">{t('btn.watchStories')}</Button>
                </div>
                
                {/* Hero Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">{t('home.stats.experience')}</div>
                    <div className="stat-label text-primary-foreground/80">{t('home.stats.experienceLabel')}</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">{t('home.stats.athletes')}</div>
                    <div className="stat-label text-primary-foreground/80">{t('home.stats.athletesLabel')}</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">{t('home.stats.success')}</div>
                    <div className="stat-label text-primary-foreground/80">{t('home.stats.successLabel')}</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">{t('home.stats.scholarships')}</div>
                    <div className="stat-label text-primary-foreground/80">{t('home.stats.scholarshipsLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Game 12 Timeline - Special Interactive Section */}
          <GameTwelveTimeline />

          {/* Authority Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">{t('home.authority.title')}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t('home.authority.subtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">{t('index.authority.card1.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('index.authority.card1.desc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">{t('index.authority.card2.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('index.authority.card2.desc')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">{t('index.authority.card3.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('index.authority.card3.desc')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Book Showcase */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="mb-6 text-primary">{t('home.book.title')}</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    {t('home.book.description')}
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-primary">{t('index.book.bestseller')}</span>
                  </div>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button className="btn-hero">{t('btn.getCopy')}</Button>
                    <Button className="btn-outline">{t('btn.previewSample')}</Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-accent to-accent-muted rounded-lg shadow-2xl flex items-center justify-center hover-lift">
                      <BookOpen className="w-24 h-24 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold text-sm animate-glow-pulse">
                      {t('index.book.available')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Multimedia Learning Hub Preview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">{t('index.learningHub.title')}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t('index.learningHub.subtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">{t('index.learningHub.podcast.title')}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {t('index.learningHub.podcast.desc')}
                      </p>
                      <Button className="btn-outline w-full">{t('btn.listenNow')}</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">{t('index.learningHub.blog.title')}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {t('index.learningHub.blog.desc')}
                      </p>
                      <Button className="btn-outline w-full">{t('btn.readArticles')}</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">{t('index.learningHub.video.title')}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {t('index.learningHub.video.desc')}
                      </p>
                      <Button className="btn-outline w-full">{t('btn.watchVideos')}</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Quiz Section */}
          <section className="py-16 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6">{t('home.quiz.title')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  {t('home.quiz.subtitle')}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="mb-2">{t('index.quiz.athleticAssessment')}</h3>
                    <p className="text-sm opacity-80">{t('index.quiz.athleticDesc')}</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="mb-2">{t('index.quiz.academicReadiness')}</h3>
                    <p className="text-sm opacity-80">{t('index.quiz.academicDesc')}</p>
                  </div>
                </div>
                <Button className="btn-gold text-lg px-8 py-4">{t('btn.takeAssessment')}</Button>
              </div>
            </div>
          </section>

          {/* Success Stories Preview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">{t('home.success.title')}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t('home.success.subtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">A</span>
                        </div>
                        <h4 className="font-semibold text-primary">{t('index.stories.alex.name')}</h4>
                        <p className="text-sm text-muted-foreground">{t('index.stories.alex.sport')}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "{t('index.stories.alex.quote')}"
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">{t('index.stories.alex.result')}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">M</span>
                        </div>
                        <h4 className="font-semibold text-primary">{t('index.stories.maya.name')}</h4>
                        <p className="text-sm text-muted-foreground">{t('index.stories.maya.sport')}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "{t('index.stories.maya.quote')}"
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">{t('index.stories.maya.result')}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">J</span>
                        </div>
                        <h4 className="font-semibold text-primary">{t('index.stories.jordan.name')}</h4>
                        <p className="text-sm text-muted-foreground">{t('index.stories.jordan.sport')}</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "{t('index.stories.jordan.quote')}"
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">{t('index.stories.jordan.result')}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <Button className="btn-hero">{t('btn.seeAllStories')}</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">{t('home.cta.title')}</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('home.cta.subtitle')}
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button className="btn-hero text-lg px-8 py-4">{t('btn.applyMentorship')}</Button>
                  <Button className="btn-outline text-lg px-8 py-4">{t('btn.scheduleConsultation')}</Button>
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