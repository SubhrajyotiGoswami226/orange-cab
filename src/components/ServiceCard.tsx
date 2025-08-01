import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getImageUrl } from '@/utils/imageImports';

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
  const handleBooking = () => {
    window.open('https://wa.link/bg5sy0', '_blank');
  };

  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-elegant hover:shadow-hover hover:-translate-y-2',
        'gradient-card border-border/50 h-full flex flex-col',
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

      <CardContent className="p-4 md:p-6 flex-grow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2">
              {name}
            </h3>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3 md:w-4 md:h-4',
                    i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
                  )}
                />
              ))}
              <span className="text-xs md:text-sm text-muted-foreground ml-1">
                {rating}/5
              </span>
            </div>
          </div>
          <div className="text-right sm:text-right flex-shrink-0">
            <div className="text-xl md:text-2xl font-bold text-primary">
              {price}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">
              {period}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
            Inclusions:
          </h4>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Limits */}
        {limits && (
          <div className="text-xs md:text-sm text-muted-foreground bg-muted/50 p-2 md:p-3 rounded-lg">
            <strong>Note:</strong> {limits}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 md:p-6 pt-0">
        <Button
          onClick={handleBooking}
          className="w-full gradient-primary hover:shadow-hover transition-elegant text-sm md:text-base"
        >
          Book Now
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};