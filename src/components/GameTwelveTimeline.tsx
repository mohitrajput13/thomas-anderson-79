import { useState } from "react";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const GameTwelveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const principles = [
    { id: 1, title: t('game12.principle1.title'), description: t('game12.principle1.desc'), position: "left" },
    { id: 2, title: t('game12.principle2.title'), description: t('game12.principle2.desc'), position: "right" },
    { id: 3, title: t('game12.principle3.title'), description: t('game12.principle3.desc'), position: "left" },
    { id: 4, title: t('game12.principle4.title'), description: t('game12.principle4.desc'), position: "right" },
    { id: 5, title: t('game12.principle5.title'), description: t('game12.principle5.desc'), position: "left" },
    { id: 6, title: t('game12.principle6.title'), description: t('game12.principle6.desc'), position: "right" },
    { id: 7, title: t('game12.principle7.title'), description: t('game12.principle7.desc'), position: "left" },
    { id: 8, title: t('game12.principle8.title'), description: t('game12.principle8.desc'), position: "right" },
    { id: 9, title: t('game12.principle9.title'), description: t('game12.principle9.desc'), position: "left" },
    { id: 10, title: t('game12.principle10.title'), description: t('game12.principle10.desc'), position: "right" },
    { id: 11, title: t('game12.principle11.title'), description: t('game12.principle11.desc'), position: "left" },
    { id: 12, title: t('game12.principle12.title'), description: t('game12.principle12.desc'), position: "right" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary">{t('game12.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('game12.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Center Line - hidden on mobile */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent"></div>

          <div className="space-y-12">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className={`flex flex-col sm:flex-row items-center sm:items-start ${
                  principle.position === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${principle.position === "left" ? "sm:pr-8" : "sm:pl-8"} mb-6 sm:mb-0`}>
                  <div className={`card-elegant hover-lift transition-all duration-300 ${
                    activeIndex === index ? "scale-105 shadow-2xl" : ""
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground">
                        {principle.id}
                      </div>
                      <h3 className="text-primary flex-1">{principle.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{principle.description}</p>

                    <div className={`relative bg-gradient-to-br from-primary to-primary-glow rounded-lg p-6 text-center transition-all duration-300 ${
                      activeIndex === index ? "opacity-100" : "opacity-75"
                    }`}>
                      <div className="flex items-center justify-center gap-3 text-primary-foreground">
                        <Play className="w-6 h-6" />
                        <span className="font-semibold">{t('game12.watchThomas')}</span>
                      </div>
                      <p className="text-sm text-primary-foreground/80 mt-2">{t('game12.videoComingSoon')}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden sm:flex">
                  <div className={`w-6 h-6 rounded-full border-4 border-accent transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-accent scale-125 animate-glow-pulse" 
                      : "bg-background"
                  }`}></div>
                </div>

                {/* Spacer for right side */}
                <div className="hidden sm:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            {t('game12.cta.subtitle')}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="btn-hero">{t('game12.cta.getSystem')}</button>
            <button className="btn-outline">{t('game12.cta.downloadGuide')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameTwelveTimeline;
