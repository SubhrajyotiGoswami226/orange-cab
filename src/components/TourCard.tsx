import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Check, Heart, Edit } from 'lucide-react';
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
    <Card className={cn('group relative overflow-hidden transition-elegant hover:shadow-hover hover:-translate-y-1 bg-card border-border/50 flex flex-col', className)}>
      
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
      
      {/* Tour Image */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img 
          src={getImageUrl(image)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Duration Badge (outside image) */}
      <div className="flex items-center justify-start mt-2 px-4">
        <div className="flex items-center gap-1 px-3 py-1 bg-black/60 rounded-full text-white text-xs">
          ⏱ <span>{duration}</span>
        </div>
      </div>

      <CardContent className="p-4 flex flex-col flex-1">
        {/* Tour Name */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            44 Reviews
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* Highlights */}
<div className="mb-4 space-y-2">
  <h4 className="font-medium text-foreground mb-2 text-sm">Highlights:</h4>
  {highlights.slice(0, 3).map((highlight, index) => (
    <div 
      key={index} 
      className="flex items-center gap-2 text-xs bg-black px-3 py-1 rounded-full text-orange-500"
    >
      <Check className="w-3 h-3 text-orange-500 flex-shrink-0" />
      <span>{highlight}</span>
    </div>
  ))}
  {highlights.length > 3 && (
    <div className="flex items-center gap-1 text-xs text-white">
      +{highlights.length - 3} more exclusive highlight
    </div>
  )}
</div>


        {/* Get Quote Button (aligned) */}
        <div className="mt-auto">
          <Button 
            onClick={handleInquiry}
            className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 transition-elegant rounded-lg"
            size="sm"
          >
            Get Quote
            <Edit className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
