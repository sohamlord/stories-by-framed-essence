import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Inquiry sent! We'll get back to you within 24 hours.");
  };

  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Get in Touch"
            title="Book Your Session"
            description="Ready to capture your beautiful journey? Fill out the form below or reach us directly."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Form */}
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle className="text-accent mb-4" size={48} />
                  <h3 className="font-serif text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="font-body text-muted-foreground">We've received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium mb-1.5 block">Your Name</label>
                      <Input placeholder="Full name" required className="h-12 rounded-xl font-body" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium mb-1.5 block">Phone</label>
                      <Input type="tel" placeholder="+91 94238 19522" required className="h-12 rounded-xl font-body" />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium mb-1.5 block">Email</label>
                    <Input type="email" placeholder="you@example.com" required className="h-12 rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium mb-1.5 block">How far along are you?</label>
                    <Input placeholder="e.g., 28 weeks" className="h-12 rounded-xl font-body" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium mb-1.5 block">Tell us about your vision</label>
                    <Textarea placeholder="Any preferences for location, style, or package?" rows={4} className="rounded-xl font-body" />
                  </div>
                  <Button variant="hero" size="xl" type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-6">Reach Us Directly</h3>
                <div className="space-y-5">
                  <a href="https://wa.me/919423819522" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="whatsapp" size="lg" className="w-full gap-2">
                      <MessageCircle size={18} /> Chat on WhatsApp
                    </Button>
                  </a>
                  <div className="space-y-4 mt-6">
                    <a href="tel:+919423819522" className="flex items-center gap-4 font-body text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-primary" />
                      </div>
                      +91 94238 19522
                    </a>
                    <a href="mailto:hello@framedessence.com" className="flex items-center gap-4 font-body text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-primary" />
                      </div>
                      hello@framedessence.com
                    </a>
                    <div className="flex items-center gap-4 font-body text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      Sancoale, South Goa, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-accent" />
                  <h4 className="font-serif text-lg font-semibold">Response Time</h4>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent bookings, WhatsApp is the fastest way to reach us.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={24} />
                  <p className="font-body text-sm text-muted-foreground">Sancoale, South Goa, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
