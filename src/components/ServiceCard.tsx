import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, ArrowRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getImageUrl } from '@/utils/imageImports';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  name: string;
  price: string;
  period: string;
  image: string;
  rating: number;
  features: string[];
  limits?: string;
  popular?: boolean;
  className?: string;
}

export const ServiceCard = ({
  id,
  name,
  price,
  period,
  image,
  rating,
  features,
  limits,
  popular = false,
  className
}: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    if (id === 'force_urbania') {
      navigate('/urbania-booking');
    } else {
      const message = `Hi Team, I am interested for ${name}`;
      const whatsappUrl = `https://wa.me/919394939500?text=${encodeURIComponent(message)}`;
      console.log("WhatsApp Link:", whatsappUrl);
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Card className={cn('group relative overflow-hidden transition-elegant hover:shadow-hover hover:-translate-y-1 bg-card border-border/50', className)}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="gradient-primary text-white border-0 px-2 py-1 text-xs font-medium">
            ⭐ Most Popular
          </Badge>
        </div>
      )}
      
      {/* Heart Icon */}
      <div className="absolute top-3 right-3 z-10">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <Heart className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <span className="text-white text-xs">‹</span>
        </div>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <span className="text-white text-xs">›</span>
        </div>
      </div>
      
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={getImageUrl(image)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Rating dots at bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>

      <CardContent className="p-4">
        {/* Service Name */}
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span>👥 4 Seats</span>
          <span>🧳 2 Bags</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            44 Reviews
          </span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-600" />
            <span className="text-muted-foreground">AC & Music System</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-600" />
            <span className="text-muted-foreground">Professional Driver</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-600" />
            <span className="text-muted-foreground">Fuel Included</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-600" />
            <span className="text-muted-foreground">GPS Navigation</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-600" />
            <span className="text-muted-foreground">24/7 Support</span>
          </div>
        </div>

        {/* Note */}
        {limits && (
          <div className="text-xs text-muted-foreground mb-4 p-2 bg-muted/30 rounded">
            <strong>Note:</strong> {limits}
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground text-sm ml-1">/ {period}</span>
        </div>

        {/* Book Button */}
        <Button 
          onClick={handleBooking}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0 transition-elegant rounded-lg"
          size="sm"
        >
          Book Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
