import * as motion from 'motion/react-client';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Contact Us
            </h2>
            <p className="text-lg text-neutral-300 drop-shadow-sm">
              Have questions about our gear? We are here to help you perform your best.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 text-orange-600 p-3 rounded-full mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Our Headquarters</h4>
                  <p className="text-neutral-500 mt-1">123 Velocity Way<br/>Athletics District, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 text-orange-600 p-3 rounded-full mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Call Us</h4>
                  <p className="text-neutral-500 mt-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-neutral-400 mt-1">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 text-orange-600 p-3 rounded-full mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Email Us</h4>
                  <p className="text-neutral-500 mt-1">support@velocitysportshub.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-neutral-900/95 backdrop-blur-xl text-white rounded-3xl shadow-xl border border-neutral-800">
              <h4 className="font-bold text-xl mb-4 text-orange-500">Business Hours</h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between text-neutral-500"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-neutral-200/60 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 drop-shadow-sm">Send a Message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:bg-white" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:bg-white" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:bg-white" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:bg-white resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    status === 'sent' 
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : status === 'error'
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                      : status === 'sending'
                      ? 'bg-orange-400 text-white cursor-wait'
                      : 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1'
                  }`}
                >
                  {status === 'sent' ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : status === 'error' ? (
                     <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Please fill all fields</span>
                    </>
                  ) : status === 'sending' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
