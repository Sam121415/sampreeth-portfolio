
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState<{subject: string, message: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Split message into subject and message (first line as subject, rest as message)
    const lines = message.split('\n');
    const subject = lines[0] || 'Portfolio Contact';
    const messageBody = lines.slice(1).join('\n') || lines[0];

    try {
      const response = await fetch('https://formspree.io/f/xpwzgdnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject,
          message: messageBody,
          fullMessage: message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setConfirmation({ subject, message: messageBody });
        toast({
          title: "Message sent successfully ✅",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setMessage('');
        
        setTimeout(() => {
          setSubmitStatus('idle');
          setConfirmation(null);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('idle');
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly at ksampreeth12@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
              {confirmation ? (
                <div className="space-y-4 text-center">
                  <div className="text-green-400 text-xl font-semibold mb-4">✅ Message Sent Successfully!</div>
                  <div className="space-y-2 p-4 bg-slate-800/50 rounded-lg">
                    <div><strong className="text-yellow-400">Subject:</strong> {confirmation.subject}</div>
                    <div><strong className="text-yellow-400">Message:</strong> {confirmation.message}</div>
                  </div>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Textarea
                    name="message"
                    placeholder="Your Message (First line will be the subject)"
                    value={message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="premium-input bg-slate-800 border-gray-600 focus:border-blue-500 text-white resize-none"
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="premium-button-compact w-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span className="premium-button-text-glow">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
