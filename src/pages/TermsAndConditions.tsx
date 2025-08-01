import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>

          <div className="space-y-6">
            {/* Booking Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Booking Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Advance Payment</h4>
                  <p className="text-muted-foreground">
                    A minimum advance payment of 25% of the total booking amount is required to confirm your reservation. 
                    The remaining balance must be paid before the commencement of the journey.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Methods</h4>
                  <p className="text-muted-foreground">
                    We accept payments through bank transfer, UPI, cash, and major credit/debit cards. 
                    All payments should be made in Indian Rupees (INR).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Booking Confirmation</h4>
                  <p className="text-muted-foreground">
                    Your booking is confirmed only after receipt of advance payment and written confirmation from our team.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation by Customer</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>More than 7 days before travel: 10% cancellation charges</li>
                    <li>3-7 days before travel: 25% cancellation charges</li>
                    <li>1-2 days before travel: 50% cancellation charges</li>
                    <li>Same day cancellation: 100% cancellation charges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation by Company</h4>
                  <p className="text-muted-foreground">
                    In case of cancellation due to unforeseen circumstances, natural disasters, or vehicle breakdown, 
                    we will provide a full refund or arrange alternative transportation at no extra cost.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle & Driver Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Vehicle & Driver Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vehicle Condition</h4>
                  <p className="text-muted-foreground">
                    All vehicles are well-maintained, regularly serviced, and equipped with necessary safety features. 
                    We ensure cleanliness and comfort for all our passengers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Driver Guidelines</h4>
                  <p className="text-muted-foreground">
                    Our drivers are experienced, licensed, and familiar with local routes. They are instructed to 
                    maintain professional conduct and ensure passenger safety at all times.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fuel & Toll Charges</h4>
                  <p className="text-muted-foreground">
                    All fuel charges are included in the package price. Toll charges, parking fees, and state taxes 
                    are included unless specifically mentioned otherwise.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Usage Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Passenger Responsibilities</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Passengers must carry valid identification documents</li>
                    <li>Smoking and consumption of alcohol inside the vehicle is strictly prohibited</li>
                    <li>Passengers are responsible for their personal belongings</li>
                    <li>Any damage to the vehicle will be charged to the customer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Route Changes</h4>
                  <p className="text-muted-foreground">
                    Any changes to the pre-decided route or additional stops may incur extra charges. 
                    Please inform us in advance for any route modifications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Time Limits</h4>
                  <p className="text-muted-foreground">
                    For city packages, 8 hours and 80km limits apply. Overtime charges will be applicable 
                    beyond the specified time and distance limits.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liability & Insurance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Liability & Insurance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Insurance Coverage</h4>
                  <p className="text-muted-foreground">
                    All our vehicles are covered under comprehensive insurance. However, passengers are advised 
                    to have their own travel insurance for personal belongings and medical emergencies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground">
                    Orange Cabs shall not be liable for any loss, damage, or injury arising from circumstances 
                    beyond our control, including but not limited to natural disasters, road conditions, or third-party actions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customer Support</h4>
                  <p className="text-muted-foreground">
                    For any queries, complaints, or support, please contact us at:
                  </p>
                  <div className="mt-2 space-y-1 text-muted-foreground">
                    <p>Phone: +91-9394939500</p>
                    <p>Email: orangecabs.assistant@gmail.com</p>
                    <p>WhatsApp: Available 24/7</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dispute Resolution</h4>
                  <p className="text-muted-foreground">
                    Any disputes arising from our services will be resolved through mutual discussion. 
                    If unresolved, disputes will be subject to the jurisdiction of Guwahati courts.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Agreement */}
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  By booking our services, you acknowledge that you have read, understood, and agree to these terms and conditions. 
                  These terms are subject to change without prior notice.
                </p>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Last updated: January 2024
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Book Your Journey?
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

export default TermsAndConditions;