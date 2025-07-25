import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, MapPin, Star, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Clock,
  MapPin,
  Star,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  const IconComponent = iconMap[icon] || Shield;

  return (
    <Card className={cn(
      'group relative overflow-hidden transition-elegant hover:shadow-hover hover:-translate-y-1',
      'gradient-card border-border/50 text-center',
      className
    )}>
      <CardContent className="p-8">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 mb-6 gradient-primary rounded-full flex items-center justify-center shadow-elegant group-hover:shadow-hover transition-elegant">
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};