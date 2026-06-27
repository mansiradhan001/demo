import { ShoppingCart, Check, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import * as motion from 'motion/react-client';

interface ProductCardProps {
  product: Product;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductCard({ product, setCartCount }: ProductCardProps) {
  const [status, setStatus] = useState<'idle' | 'added' | 'error'>('idle');

  const handleAddToCart = () => {
    if (!product.inStock) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }
    setCartCount(c => c + 1);
    setStatus('added');
    setTimeout(() => setStatus('idle'), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm border border-white/40 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      <div className="relative z-0 h-64 overflow-hidden bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md pb-px px-3 py-1 rounded-full text-sm font-semibold text-neutral-900 shadow-sm border border-white/50">
          ${product.price.toFixed(2)}
        </div>
        
        {!product.inStock && (
           <div className="absolute top-4 left-4 bg-red-500/80 backdrop-blur-md pb-px px-3 py-1 rounded-full text-sm font-semibold text-white shadow-sm border border-red-400/50">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-6 relative">
        <h3 className="font-bold text-lg text-neutral-900 mb-2">{product.name}</h3>
        <ul className="space-y-1 mb-6">
          {product.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-neutral-500 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={handleAddToCart}
          disabled={status !== 'idle' && status !== 'error'}
          className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
            status === 'added'
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
              : status === 'error'
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
              : !product.inStock
              ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
              : 'bg-neutral-900 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/30'
          }`}
        >
          {status === 'added' ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added to Cart</span>
            </>
          ) : status === 'error' ? (
             <>
              <XCircle className="w-5 h-5" />
              <span>Unavailable</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
