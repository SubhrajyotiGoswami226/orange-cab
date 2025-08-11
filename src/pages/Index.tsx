import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TourCard } from '@/components/TourCard';
// removed FeatureCard import (we render features inline now)
import { ContactSection } from '@/components/ContactSection';
import FloatingActions from '@/components/FloatingActions';
import servicesData from '@/data/services.json';
import featuresJson from '@/data/features.json'; // NEW: feature images data

const Index = () => {
  const [data, setData] = useState(servicesData);

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    // For now, we're using the imported JSON data
    setData(servicesData);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar 
        logo={data.navigation.logo}
        items={data.navigation.items}
        ctaButton={data.navigation.ctaButton}
      />

      {/* Hero Section */}
      <Hero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        ctaButtons={data.hero.ctaButtons}
      />

      {/* City Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              City Cab Rentals in Guwahati – Comfort Meets Convenience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect ride for your city journeys, tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cityServices.services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                className="animate-fade-in"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="ghost" className="text-white hover:text-white/80">
              View all →
            </Button>
          </div>
        </div>
      </section>

      {/* Outstation Cab Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Outstation Cab
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Planning for Meghalaya Arunachal Nagaland Assam Outstation holidays?<br />
              Contact us for rates and a complimentary itinerary assistance.
            </p>
            <a
              href={`https://wa.me/919394939500?text=${encodeURIComponent("Hi Team, I am interested for Outstation Cab")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section (inline cards with image-in-circle) */}
      <section className="py-20 bg-background" id='features'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Orange Cabs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuresJson.map((feature, idx) => (
              <div key={idx} className="text-center animate-fade-in">
                {/* Bigger circle with gradient + contained image */}
                <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-orange-500 overflow-hidden shadow-lg">
  <img
    src={feature.image}
    alt={feature.title}
    className="w-full h-full object-cover"
  />
</div>


                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-white/80 max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Outstation Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the beautiful Northeast India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.outstationServices.tours.slice(0, 3).map((tour) => (
              <TourCard
                key={tour.id}
                {...tour}
                name="5-Day Meghalaya Escape"
                className="animate-fade-in"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="ghost" className="text-white hover:text-white/80">
              View all →
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection {...data.contact} />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Orange Cabs
            </h3>
            <p className="text-background/80 mb-4">
              Your trusted partner for comfortable and reliable transportation in Northeast India
            </p>
            <div className="mb-4">
              <Link to="/terms-and-conditions" className="text-background/80 hover:text-background underline">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-background/60 text-sm">
              © 2024 Orange Cabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default Index;
