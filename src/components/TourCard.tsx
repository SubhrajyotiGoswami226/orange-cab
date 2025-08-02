import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getImageUrl } from '@/utils/imageImports';

interface TourCardProps {
  id: string;
  name: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  price: string;
  popular?: boolean;
  className?: string;
}

export const TourCard = ({
  id,
  name,
  duration,
  description,
  image,
  highlights,
  price,
  popular = false,
  className
}: TourCardProps) => {
  const handleInquiry = () => {
    const message = `Hi Team, I am interested for ${name}`;
    const whatsappUrl = `https://wa.me/919394939500?text=${encodeURIComponent(message)}`;
    console.log("WhatsApp Link:", whatsappUrl);
    window.open(whatsappUrl, '_blank');
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
            Popular Tour
          </Badge>
        </div>
      )}

      <CardHeader className="p-0 relative">
        {/* Tour Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={getImageUrl(image)}
            alt={name}
            className="w-full h-full object-cover transition-elegant group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Tour Highlights:
          </h4>
          <div className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <Star className="w-3 h-3 text-primary fill-current flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {highlight}
                </span>
              </div>
            ))}
            {highlights.length > 3 && (
              <div className="text-sm text-primary font-medium">
                +{highlights.length - 3} more highlights
              </div>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="bg-muted/50 p-3 rounded-lg">
          <div className="text-sm text-muted-foreground">Starting from</div>
          <div className="text-lg font-bold text-primary">
            {price}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleInquiry}
          className="w-full gradient-primary hover:shadow-hover transition-elegant"
        >
          Get Quote
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};
