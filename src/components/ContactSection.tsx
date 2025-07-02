
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
  const [showSunFX, setShowSunFX] = useState(false);
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
        setShowSunFX(true);
        setTimeout(() => setShowSunFX(false), 4000);
        
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

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Dark Background with Falling Stars and Floating Planets */}
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      {/* Floating Planets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse floating-planet"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-400/30 rounded-full animate-pulse floating-planet" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-yellow-400/30 rounded-full animate-pulse floating-planet" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-300/30 rounded-full animate-pulse floating-planet" style={{animationDelay: '0.5s'}}></div>
        {/* Medium-sized Sun */}
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-radial from-yellow-400/40 via-orange-400/30 to-transparent rounded-full animate-pulse floating-planet sun-planet" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Enhanced Sun FX on Form Submit */}
      {showSunFX && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 bg-gradient-radial from-yellow-400/60 via-orange-400/40 to-transparent rounded-full animate-pulse opacity-90 sun-glow"></div>
            <div className="absolute inset-0 w-72 h-72 bg-gradient-radial from-yellow-300/30 via-orange-300/20 to-transparent rounded-full animate-pulse sun-glow-outer"></div>
            {/* Enhanced Sunrays */}
            <div className="absolute inset-0 sunrays-enhanced">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-32 bg-gradient-to-t from-yellow-400/80 via-orange-400/60 to-transparent opacity-80 sunray-glow"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: 'bottom center',
                    top: '-16px',
                    left: '50%',
                    marginLeft: '-4px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400 laser-icon-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">ksampreeth12@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400 laser-icon-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+91 9591491861</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400 laser-icon-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-900/80 border-blue-500/30 backdrop-blur-sm">
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
                      className="bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
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
                      className="bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-800 border-gray-600 focus:border-blue-500 text-white resize-none"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="premium-send-button-slow w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 border-2 border-pink-400/50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
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
