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
  const [showAllTours, setShowAllTours] = useState(false);

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    // For now, we're using the imported JSON data
    setData(servicesData);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

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
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {data.cityServices.subtitle}
      </p>
    </div>

    {/* Show only first 3 cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.cityServices.services.slice(0, 3).map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          className="animate-fade-in"
        />
      ))}
    </div>

    {/* View all button */}
    <div className="text-center mt-12">
      <Link to="/cab-booking">
        <Button variant="ghost" className="text-white hover:text-white/80">
          View all →
        </Button>
      </Link>
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

          {/* Show first 3 tours, toggle view all */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllTours 
              ? data.outstationServices.tours 
              : data.outstationServices.tours.slice(0, 3)
            ).map((tour) => (
              <TourCard
                key={tour.id}
                {...tour}
                className="animate-fade-in"
              />
            ))}
          </div>
          
          {/* View all button */}
          {data.outstationServices.tours.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="ghost" 
                className="text-white hover:text-white/80"
                onClick={() => setShowAllTours(!showAllTours)}
              >
                {showAllTours ? "Show Less ↑" : "View All →"}
              </Button>
            </div>
          )}
        </div>
      </section>


      {/* Contact Section */}
      <ContactSection {...data.contact} />

      {/* Footer */}
<footer className="bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-10">
    
    {/* Left Section - Logo + Description + Social */}
    <div className="md:w-1/2">
      <h3 className="text-2xl font-bold mb-4">
        <span className="text-orange-500">Orange</span>
        <span className="text-white">Cab</span>
      </h3>
      <p className="text-gray-400 text-sm mb-6 max-w-sm">
        Delivering safe, reliable, and premium cab services across Guwahati and the Northeast. 
        From city rides to curated outstation tours, we make every journey comfortable and hassle-free.
      </p>

      {/* Follow Us */}
      <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
      <div className="flex space-x-4 text-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Right Section - Links in 3 Columns */}
    <div className="flex flex-col sm:flex-row sm:gap-12 md:gap-16">
      {/* About */}
      <div>
        <h4 className="text-lg font-semibold mb-4">About</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-orange-500">Our Story</a></li>
          <li><a href="#services" className="hover:text-orange-500">Services</a></li>
          <li><a href="#fleet" className="hover:text-orange-500">Fleet</a></li>
          <li><a href="#tours" className="hover:text-orange-500">Tours</a></li>
        </ul>
      </div>

      {/* Bookings */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Bookings</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#cab" className="hover:text-orange-500">City Cab Booking</a></li>
          <li><a href="#outstation" className="hover:text-orange-500">Outstation Cab Booking</a></li>
          <li><a href="#tours" className="hover:text-orange-500">Tour Packages</a></li>
          <li><a href="#faq" className="hover:text-orange-500">Finance FAQ</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
          <li><Link to="/terms-and-conditions" className="hover:text-orange-500">Terms & Conditions</Link></li>
          <li><a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
    © 2025 Orange Cab. All rights reserved.
  </div>
</footer>


      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default Index;
