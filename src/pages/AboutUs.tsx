import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            About Us
          </h1>

          <div className="space-y-6">
            {/* Welcome Section */}
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Welcome to Orange Cab, your trusted partner for seamless and safe transportation across Guwahati and beyond. We are dedicated to delivering reliable taxi and cab hire services that redefine comfort, convenience, and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            {/* Our Story */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Orange Cab was born from a simple vision: to transform the way people travel in Northeast India. Starting as a small venture in Guwahati, we recognized the need for reliable, safe, and comfortable transportation services in our beautiful region.
                </p>
                <p className="text-muted-foreground">
                  What began with a handful of vehicles and a commitment to excellence has grown into a trusted name across Guwahati and beyond. Our journey has been shaped by countless satisfied customers, dedicated drivers, and an unwavering focus on quality service.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve thousands of passengers, connecting them to their destinations safely while showcasing the natural beauty and cultural richness of Northeast India through our outstation and tour services.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  At Orange Cab, our mission is simple: to make every ride effortless and enjoyable. We endeavor to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide punctual and dependable cab services.</li>
                  <li>Ensure safety and comfort for every passenger.</li>
                  <li>Use a transparent pricing system—no hidden charges.</li>
                  <li>Employ courteous, well-trained drivers and well-maintained vehicles.</li>
                </ul>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Point-to-point city rides in Guwahati.</li>
                  <li>Outstation and Meghalaya trips — explore scenic destinations with peace of mind.</li>
                  <li>Flexible booking options — our services are designed to suit your schedule.</li>
                  <li>Round-the-clock support & assistance, 24/7.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Why Choose Orange Cab */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Why Choose Orange Cab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Reliability — we believe in being on time, every time.</li>
                  <li>Safety & cleanliness — all our cabs are regularly serviced and sanitized.</li>
                  <li>Transparent fares — what you see is what you pay, with no surprises.</li>
                  <li>Friendly & professional drivers — our team is selected with care.</li>
                  <li>Customer-first approach — your satisfaction is our priority.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To become the most trusted and sought-after taxi service in the Northeast region, by combining technology, service excellence, and local hospitality.
                </p>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Integrity — honesty in every transaction.</li>
                  <li>Respect — for passengers, drivers, and communities we serve.</li>
                  <li>Responsibility — keeping our vehicles and our service standards high.</li>
                  <li>Innovation — continuously improving our service using technology.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Thank You Section */}
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  Thank you for choosing Orange Cab. Whether it's a short trip across town or a scenic journey into Meghalaya, we are here to take you there — safely, comfortably, and with care.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Experience Our Service?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.link/bg5sy0', '_blank')}
                className="gradient-primary hover:shadow-hover transition-elegant"
                size="lg"
              >
                Book on WhatsApp
              </Button>
              <Button
                onClick={() => window.open('tel:+919394939500', '_self')}
                variant="outline"
                size="lg"
              >
                Call +91-9394939500
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;