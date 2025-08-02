import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, ExternalLink } from 'lucide-react';
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
      const whatsappUrl = `https://wa.link/bg5sy0?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-elegant hover:shadow-hover hover:-translate-y-2',
        'gradient-card border-border/50',
        popular && 'ring-2 ring-primary/20 shadow-elegant',
        className
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="gradient-primary text-white shadow-lg">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="p-0 relative">
        {/* Service Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={getImageUrl(image)}
            alt={name}
            className="w-full h-full object-cover transition-elegant group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between mb-4 min-w-0">
          <div className="flex-shrink-0">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {name}
            </h3>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-4 h-4',
                    i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
                  )}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                {rating}/5
              </span>
            </div>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-right mt-2 sm:mt-0">
            <div className="text-2xl font-bold text-primary whitespace-nowrap">
              {price}
            </div>
            <div className="text-sm text-muted-foreground">
              {period}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-foreground mb-2">
            Inclusions:
          </h4>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Limits */}
        {limits && (
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <strong>Note:</strong> {limits}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleBooking}
          className="w-full gradient-primary hover:shadow-hover transition-elegant"
        >
          Book Now
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};
