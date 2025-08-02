import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const handleCall = () => {
    window.open('tel:+919394939500', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.link/bg5sy0', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        onClick={handleCall}
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gradient-primary"
      >
        <Phone className="w-6 h-6" />
      </Button>
      <Button
        onClick={handleWhatsApp}
        size="icon" 
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gradient-primary"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingActions;