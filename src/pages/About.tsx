import * as motion from 'motion/react-client';
import { Target, Eye, Award, Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section className="relative overflow-hidden bg-neutral-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
              Our Story
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed drop-shadow-sm">
              Velocity Sports Hub started with a simple belief: every athlete deserves access to professional-grade equipment, regardless of their level. Born out of a passion for sports and a drive for excellence, we have grown into a leading provider of high-quality athletic gear.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-50 rounded-3xl p-10 border border-neutral-200"
          >
            <div className="bg-orange-100 text-orange-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To empower athletes to reach their full potential by providing innovative, durable, and superior sports equipment. We believe in performance without compromise.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-900 text-white rounded-3xl p-10"
          >
            <div className="bg-neutral-800 text-orange-500 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-neutral-300 leading-relaxed">
              To be the global catalyst for athletic excellence, creating a supportive community where gear meets grit and athletes shatter their personal bests.
            </p>
          </motion.div>

        </div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-extrabold text-neutral-900 mb-4">Our Values</h3>
            <p className="text-neutral-500 max-w-2xl mx-auto">The core principles that guide everything we do, from product selection to customer service.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Quality First", desc: "We never compromise on the materials or construction of our gear." },
              { icon: Lightbulb, title: "Innovation", desc: "Constantly seeking new technologies to enhance athletic performance." },
              { icon: Award, title: "Integrity", desc: "Honest pricing, transparent sourcing, and authentic claims." },
              { icon: HeartHandshake, title: "Community", desc: "Supporting athletes of all levels to achieve their goals together." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + Math.min(idx * 0.1, 0.5) }}
                className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-orange-50 text-orange-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h4>
                <p className="text-neutral-600 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
           <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbc1d0d9cd?auto=format&fit=crop&q=80&w=1600" 
            alt="Athletes training" 
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
