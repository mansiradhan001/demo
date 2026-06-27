import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-neutral-50 text-neutral-900 selection:bg-orange-500 selection:text-white">
        <Navbar cartCount={cartCount} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setCartCount={setCartCount} />} />
            <Route path="/shop" element={<Shop setCartCount={setCartCount} />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
