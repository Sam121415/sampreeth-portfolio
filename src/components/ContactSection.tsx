
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xpwzgdnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly at ksampreeth12@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ksampreeth12@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919591491861';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Bengaluru,Karnataka,India', '_blank');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden premium-section">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      {/* Modern Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-blue-400/50 to-purple-500/30 rounded-full modern-floating-orb"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Simple Glowing Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-radial from-yellow-400/80 via-white/60 to-transparent rounded-full glowing-star-premium"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text premium-section-title">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="premium-contact-card bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
                    <Mail className="w-6 h-6 text-blue-400 premium-animated-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white premium-contact-title">Email</h3>
                    <button 
                      onClick={handleEmailClick}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer premium-contact-link"
                    >
                      ksampreeth12@gmail.com
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-contact-card bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
                    <Phone className="w-6 h-6 text-blue-400 premium-animated-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white premium-contact-title">Phone</h3>
                    <button 
                      onClick={handlePhoneClick}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer premium-contact-link"
                    >
                      +91 9591491861
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-contact-card bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg premium-icon-container">
                    <MapPin className="w-6 h-6 text-blue-400 premium-animated-icon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white premium-contact-title">Location</h3>
                    <button 
                      onClick={handleLocationClick}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer premium-contact-link"
                    >
                      Bengaluru, Karnataka, India
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="premium-form-card bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white resize-none"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="modern-button modern-button-send w-full py-4 text-lg font-bold"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
