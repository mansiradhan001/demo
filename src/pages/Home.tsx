import * as motion from 'motion/react-client';
import { ArrowRight, Trophy, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

export default function Home({ setCartCount }: { setCartCount: any }) {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-32 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000" 
            alt="Sports Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex flex-row items-center space-x-2 bg-orange-600/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              <span>New Arrivals for the Season</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Gear Up.<br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Play Hard. Win Big.
              </span>
            </h1>
            <p className="text-xl text-neutral-300 md:leading-relaxed mb-8 drop-shadow-md">
              Your one-stop destination for premium sports equipment, apparel, and accessories. Whether you're a beginner, a fitness enthusiast, or a professional athlete, we provide high-quality gear to help you perform at your best.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/shop"
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-1 w-fit"
              >
                <span>Shop Collection</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            {[
              { icon: Trophy, title: "Premium Quality", desc: "Professional match quality equipment for every sport." },
              { icon: Shield, title: "Built to Last", desc: "Long-lasting durability to endure the toughest sessions." },
              { icon: Zap, title: "Elevated Performance", desc: "Lightweight designs engineered for better control and power." }
            ].map((Feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center pt-8 md:pt-0 group cursor-pointer"
              >
                <div className="bg-orange-50 text-orange-600 p-5 rounded-3xl mb-6 relative overflow-hidden group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <Feature.icon size={36} className="relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-orange-600 transition-colors">{Feature.title}</h3>
                <p className="text-neutral-500 max-w-xs">{Feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Featured Gear</h2>
              <p className="text-neutral-500 mt-2">Discover our top-rated equipment</p>
            </div>
            <Link 
              to="/shop"
              className="hidden md:flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} setCartCount={setCartCount} />
            ))}
          </div>
          
          <Link 
            to="/shop"
            className="mt-8 w-full md:hidden flex items-center justify-center space-x-2 text-orange-600 font-medium py-3 border border-orange-200 rounded-xl"
          >
            <span>View All Products</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
