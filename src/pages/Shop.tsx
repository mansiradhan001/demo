import { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import * as motion from 'motion/react-client';

export default function Shop({ setCartCount }: { setCartCount: any }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-neutral-50 pb-20">
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-32 pb-20 mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Shop Equipment" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Shop All Gear
            </h2>
            <p className="text-lg text-neutral-300 drop-shadow-md">
              From the field to the gym, we've got the equipment you need to perform at your peak.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h3 className="text-2xl font-bold text-neutral-900">Explore Equipment</h3>
          
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:pb-0 hide-scrollbar gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? "bg-orange-600 text-white shadow-md shadow-orange-600/20" 
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-orange-600 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
           <div className="text-center py-20">
             <p className="text-neutral-500 text-lg">No products found in this category.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 10) * 0.05 }}
              >
                <ProductCard product={product} setCartCount={setCartCount} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
