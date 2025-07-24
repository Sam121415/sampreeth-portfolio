
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with separate subject and message
    const emailParams = new URLSearchParams({
      subject: subject.trim() || 'Portfolio Contact',
      body: message.trim()
    });
    
    const mailtoLink = `mailto:ksampreeth12@gmail.com?${emailParams.toString()}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    toast({
      title: "Email client opened",
      description: "Your default email application should open with the message pre-filled.",
    });
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-space-bg"></div>
      <div className="absolute inset-0 enhanced-falling-stars opacity-70"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 premium-section-title-unified premium-title-font">Get In Touch</h2>
        
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
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  rows={6}
                  className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white resize-none"
                />
                
                <Button
                  type="submit"
                  className="premium-button-compact w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span className="premium-button-text-glow">Send Message</span>
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
