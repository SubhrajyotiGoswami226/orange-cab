import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TourCard } from '@/components/TourCard';
import { FeatureCard } from '@/components/FeatureCard';
import { ContactSection } from '@/components/ContactSection';
import FloatingActions from '@/components/FloatingActions';
import servicesData from '@/data/services.json';

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
              {data.cityServices.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {data.cityServices.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {data.cityServices.services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                className="animate-fade-in"
              />
            ))}
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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Planning for Meghalaya Arunachal Nagaland Assam Outstation holidays?<br />
              Contact us for rates and a complimentary itinerary assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Orange Cabs?
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {data.outstationServices.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {data.outstationServices.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.outstationServices.tours.map((tour) => (
              <TourCard
                key={tour.id}
                {...tour}
                className="animate-fade-in"
              />
            ))}
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
