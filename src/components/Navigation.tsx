import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.learningHub'), href: "/media" },
    { name: t('nav.aboutThomas'), href: "/about" },
  ];

  useEffect(() => {
    // Listen for Google Translate changes
    const observer = new MutationObserver(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        const value = select.value;
        setCurrentLang(value === 'es' ? 'es' : 'en');
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  const translateToLanguage = (lang: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
      setCurrentLang(lang);
    }
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img
              src="/logo.png"
              alt="Thomas Anderson Logo"
              className="w-full h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors hover:text-primary group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            
            {/* Google Translate Language Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => translateToLanguage('en')}
                className={`px-3 py-1 rounded-lg border transition-colors text-sm font-medium ${
                  currentLang === 'en'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => translateToLanguage('es')}
                className={`px-3 py-1 rounded-lg border transition-colors text-sm font-medium ${
                  currentLang === 'es'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-muted'
                }`}
              >
                ES
              </button>
            </div>
            
            <Button className="btn-gold">{t('nav.getGuide')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Google Translate Language Buttons */}
              <div className="flex items-center gap-2 mx-4">
                <button
                  onClick={() => translateToLanguage('en')}
                  className={`px-3 py-2 rounded-lg border transition-colors text-sm font-medium flex-1 ${
                    currentLang === 'en'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => translateToLanguage('es')}
                  className={`px-3 py-2 rounded-lg border transition-colors text-sm font-medium flex-1 ${
                    currentLang === 'es'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  Español
                </button>
              </div>
              
              <Button className="btn-gold mx-4 mt-4">{t('nav.getGuide')}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
