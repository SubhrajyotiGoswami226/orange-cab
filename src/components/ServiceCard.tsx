import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, Heart, Luggage, Users } from 'lucide-react';
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
  seats: number | string;
  bags: number;
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
  seats,
  bags,
  features,
  limits,
  popular = false,
  className
}: ServiceCardProps) => {
  const navigate = useNavigate();

  // SEO-friendly URL mapping
  const getSEOUrl = (serviceId: string) => {
    const seoUrls: { [key: string]: string } = {
      'city_cab': '/city-cab-rental-in-guwahati',
      'innova_cab': '/innova-cab-rental-in-guwahati',
      'tempo_traveller': '/tempo-traveller-rental-in-guwahati',
      'force_urbania': '/urbania-rental-in-guwahati',
      'ertiga_cab': '/ertiga-cab-rental-in-guwahati',
      'creta_cab': '/creta-cab-rental-in-guwahati'
    };
    
    return seoUrls[serviceId] || `/service/${serviceId}`;
  };

  const handleBooking = () => {
    navigate(getSEOUrl(id));
  };

  return (
    <Card
      className={cn(
        'group relative flex flex-col overflow-hidden hover:shadow-hover hover:-translate-y-1 bg-card border border-border/50 transition-elegant',
        className
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-orange-500 text-white border-0 px-3 py-1 text-xs font-medium rounded-full">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Heart Icon */}
      <div className="absolute top-3 right-3 z-10">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
          <Heart className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Service Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={getImageUrl(image)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="flex flex-col flex-grow p-4">
        {/* Name + Rating */}
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`}
              />
            ))}
            <span className="text-xs text-white/80">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Seats & Bags */}
        <div className="flex items-center gap-4 text-[11px] text-white/80 mb-3">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3 text-white" /> {seats} Seats
          </span>
          <span className="flex items-center gap-1">
            <Luggage className="w-3 h-3 text-white" /> {bags} Bags
          </span>
        </div>

        {/* Features in pill boxes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Spacer so price/button aligns at bottom */}
        <div className="flex-grow"></div>

        {/* Price + Button */}
        <div className="mt-auto">
          <div className="mb-4">
            <span className="text-2xl font-bold text-orange-500">{price}</span>
            <span className="text-white/70 text-sm ml-1">/ {period}</span>
          </div>
          <Button
            onClick={handleBooking}
            className="w-full bg-white text-orange-500 hover:bg-gray-100 border-0 transition-elegant rounded-lg"
            size="sm"
          >
            Book Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
