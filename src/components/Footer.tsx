import { Flame, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 setext-white border-t border-neutral-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/"
              className="flex items-center space-x-2 cursor-pointer mb-4"
            >
              <div className="bg-orange-600 text-white p-1.5 rounded-lg">
                <Flame size={20} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white drop-shadow-md">Velocity Sports Hub</span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Your ultimate destination for premium sports gear. Elevate your game, break your limits, and win big with our professional equipment.
            </p>
            <div className="flex space-x-4 text-neutral-400">
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-neutral-200">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-orange-500 transition-colors">Shop All Gear</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Fitness Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-neutral-200">Business Hours</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Velocity Sports Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
