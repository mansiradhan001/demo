import * as motion from 'motion/react-client';
import { articles } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=2000" 
            alt="Blog" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Latest Articles
            </h2>
            <p className="text-lg text-neutral-300 drop-shadow-sm">
              Training tips, gear reviews, and stories from the Velocity Sports Hub community.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200 group flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <span className="text-sm font-bold text-orange-600 tracking-wider uppercase mb-2">
                  {article.category}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-500 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="flex items-center space-x-2 text-neutral-900 font-semibold group-hover:text-orange-600 transition-colors mt-auto">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
