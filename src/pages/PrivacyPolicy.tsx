import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <div className="space-y-6">
            {/* Last Updated */}
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground font-semibold">
                  Last Updated: October 2025
                </p>
                <p className="text-muted-foreground mt-4">
                  At Orange Cab, we respect your privacy. This policy explains how we collect and use your information.
                </p>
              </CardContent>
            </Card>

            {/* What We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">1. What We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may collect your:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Name, phone number, and email.</li>
                  <li>Pickup and drop details.</li>
                  <li>Trip and booking information.</li>
                  <li>Basic device info like IP address and browser type.</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use It */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">2. How We Use It</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Book and manage your rides.</li>
                  <li>Improve our services and website.</li>
                  <li>Send updates or offers (only if you agree).</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sharing Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">3. Sharing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We don't sell or share your data with anyone, except:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Service providers helping us run our site.</li>
                  <li>If required by law.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Safety */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">4. Data Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use secure systems to protect your data from misuse or unauthorized access.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">5. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies to improve your experience. You can turn them off in your browser anytime.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">6. Changes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this policy occasionally. Check this page for the latest version.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Questions About Our Privacy Policy?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.link/bg5sy0', '_blank')}
                className="gradient-primary hover:shadow-hover transition-elegant"
                size="lg"
              >
                Contact Us on WhatsApp
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

export default PrivacyPolicy;