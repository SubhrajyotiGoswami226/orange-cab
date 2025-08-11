import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { images } from '@/utils/imageImports';
import React from 'react';

interface CTAButton {
  text: string;
  action: string;
  primary: boolean;
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaButtons?: CTAButton[];
}

export const Hero: React.FC<HeroProps> = () => {
  const handleAction = (action: string) => {
    if (action === 'book') {
      window.open('https://wa.link/bg5sy0', '_blank');
    } else if (action === 'call') {
      window.open('tel:+919394939500', '_self');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images.hero}')` }}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Page container with equal side spacing */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-black/65 backdrop-blur-sm border border-white/10">
            <span className="text-lg font-semibold text-white">4.7</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-white/90">Trusted by 500+ Happy Riders</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Cab Services <span className="italic text-orange-300">in Guwahati</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            Experience luxury, comfort, and reliability with Orange Cabs
          </p>

          {/* CTA */}
          <Button
            onClick={() => handleAction('book')}
            size="lg"
            className="gradient-primary hover:shadow-hover hover:-translate-y-1 text-white border-0 min-w-[200px] h-14 text-lg font-medium transition-elegant"
          >
            Book Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
