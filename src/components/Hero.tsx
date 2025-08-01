import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { images } from '@/utils/imageImports';

interface CTAButton {
  text: string;
  action: string;
  primary: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: CTAButton[];
}

export const Hero = ({ title, subtitle, description, ctaButtons }: HeroProps) => {
  const handleAction = (action: string) => {
    if (action === 'book') {
      window.open('https://wa.link/bg5sy0', '_blank');
    } else if (action === 'call') {
      window.open('tel:+919349365000', '_self');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images.hero}')`
          }}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-200">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleAction(button.action)}
                variant={button.primary ? "default" : "outline"}
                size="lg"
                className={
                  button.primary
                    ? "gradient-primary hover:shadow-hover transition-elegant text-lg px-8 py-6"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20 transition-elegant text-lg px-8 py-6"
                }
              >
                {button.action === 'call' ? (
                  <Phone className="w-5 h-5 mr-2" />
                ) : (
                  <ArrowRight className="w-5 h-5 mr-2" />
                )}
                {button.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-float">
          <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg mx-auto">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};