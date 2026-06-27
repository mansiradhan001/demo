import { ShoppingCart, Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { id: '/', label: 'Home' },
    { id: '/shop', label: 'Shop' },
    { id: '/about', label: 'About' },
    { id: '/blog', label: 'Blog' },
    { id: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-2xl border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-orange-600 text-white p-1.5 rounded-lg">
              <Flame size={24} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-neutral-900 drop-shadow-sm">Velocity Sports Hub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.id}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  location.pathname === tab.id 
                    ? 'bg-orange-50 border border-orange-600 text-orange-700' 
                    : 'border border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-neutral-600 hover:text-orange-600 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-600 border-2 border-white rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 text-neutral-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 py-4 space-y-2 shadow-lg">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.id}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === tab.id 
                  ? 'bg-orange-50 text-orange-700 border border-orange-600' 
                  : 'text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
