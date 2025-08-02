import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { Link } from 'react-router-dom'; // <-- Added Link import

interface NavItem {
  label: string;
  href: string;
  id: string;
}

interface NavbarProps {
  logo: string;
  items: NavItem[];
  ctaButton: {
    text: string;
    action: string;
  };
}

export const Navbar = ({ logo, items, ctaButton }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    if (ctaButton.action === 'call') {
      window.open('tel:+919394939500', '_self');
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-elegant',
        isScrolled ? 'glass-effect shadow-elegant' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <h1
              className={cn(
                'text-xl md:text-2xl font-bold pointer-events-auto transition-colors duration-300 drop-shadow-sm',
                isScrolled ? 'text-primary' : 'text-white'
              )}
            >
              {logo}
            </h1>
          </div>

          {/* CENTER: Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {items.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={cn(
                      'text-sm font-medium transition-elegant hover:text-primary',
                      isScrolled
                        ? 'text-foreground'
                        : 'text-white hover:text-primary-light'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-elegant hover:text-primary',
                      isScrolled
                        ? 'text-foreground'
                        : 'text-white hover:text-primary-light'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT: Desktop controls and Mobile buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className={cn(
                  'transition-elegant',
                  isScrolled
                    ? 'text-foreground hover:bg-muted'
                    : 'text-white hover:bg-white/10'
                )}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                onClick={handleCTA}
                variant="default"
                className={cn(
                  'gradient-primary hover:shadow-hover transition-elegant',
                  !isScrolled &&
                    'bg-white/10 text-white border-white/20 hover:bg-white/20'
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                {ctaButton.text}
              </Button>
            </div>
            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className={cn(
                  'text-white hover:bg-white/10',
                  isScrolled && 'text-foreground hover:bg-muted'
                )}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'text-white hover:bg-white/10',
                  isScrolled && 'text-foreground hover:bg-muted'
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect mt-2 rounded-lg">
              {items.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-elegant"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-elegant"
                    onClick={() => setIsMobileMenuOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                )
              )}
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary hover:bg-muted/50"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Night Mode
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Day Mode
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleCTA}
                  variant="default"
                  className="w-full gradient-primary"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {ctaButton.text}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
