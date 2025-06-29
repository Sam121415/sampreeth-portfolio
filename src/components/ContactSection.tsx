
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
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
    <section id="contact" className="section-padding bg-dark-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-dark-700/50 border-neon-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neon-teal/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-neon-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neon-teal">Email</h3>
                    <p className="text-gray-300">ksampreeth12@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-700/50 border-neon-gold/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neon-gold/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-neon-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neon-gold">Phone</h3>
                    <p className="text-gray-300">+91 9591491861</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-700/50 border-neon-blue/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-neon-blue/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neon-blue">Location</h3>
                    <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-dark-700/50 border-neon-pink/30">
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
                      className="bg-dark-800 border-gray-600 focus:border-neon-pink text-white"
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
                      className="bg-dark-800 border-gray-600 focus:border-neon-pink text-white"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-dark-800 border-gray-600 focus:border-neon-pink text-white"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-dark-800 border-gray-600 focus:border-neon-pink text-white resize-none"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-pink hover:bg-neon-pink/90 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/25"
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
