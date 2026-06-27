import { Product, BlogPost } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Velocity Carbon Match Ball",
    category: "Team Sports",
    features: ["FIFA Quality Pro certified", "Thermal bonded aerodynamics"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 2,
    name: "AeroSpeed Phantom Cricket Bat",
    category: "Team Sports",
    features: ["Grade 1 English Willow", "Ultra-light pickup"],
    price: 349.99,
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 4,
    name: "HyperStrike Pro Racket",
    category: "Racket Sports",
    features: ["Nanocarbon frame", "Maximum string tension"],
    price: 189.99,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 6,
    name: "Velocity Vapor Alpha",
    category: "Running",
    features: ["Carbon fiber plate", "Hyper-responsive foam"],
    price: 249.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    inStock: false
  },
  {
    id: 8,
    name: "Flex Yoga Mat",
    category: "Fitness",
    features: ["Extra thickness", "Eco-friendly material"],
    price: 24.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 9,
    name: "ProFit Gym Bag",
    category: "Accessories",
    features: ["Shoe pocket", "Water-resistant"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 10,
    name: "AquaShield Water Bottle",
    category: "Accessories",
    features: ["Vacuum insulated", "Leak-proof cap"],
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 12,
    name: "AeroSpin TT Helmet",
    category: "Cycling",
    features: ["Wind tunnel tested", "Magnetic visor"],
    price: 185.00,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    inStock: false
  },
  {
    id: 14,
    name: "Apex Series Sparring Gloves",
    category: "Combat Sports",
    features: ["Italian leather", "Ergonomic thumb alignment"],
    price: 145.00,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 15,
    name: "AeroGlide Jump Rope",
    category: "Fitness",
    features: ["Adjustable length", "Smooth bearing system"],
    price: 18.50,
    image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 16,
    name: "Titanium Climbing Carabiner",
    category: "Climbing",
    features: ["Aviation grade aluminum", "Auto-locking mechanism"],
    price: 22.00,
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 18,
    name: "ProGrip Weightlifting Belt",
    category: "Fitness",
    features: ["Genuine leather", "Enhanced lumbar support"],
    price: 45.00,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 19,
    name: "BalanceBoard Core Trainer",
    category: "Fitness",
    features: ["Non-slip surface", "Solid wood construction"],
    price: 55.00,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 22,
    name: "Agility Training Ladder",
    category: "Fitness",
    features: ["15-foot length", "Adjustable rungs"],
    price: 25.50,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 24,
    name: "AeroFly Golf Balls (Dozen)",
    category: "Team Sports",
    features: ["Soft feel", "Maximum distance"],
    price: 42.00,
    image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 25,
    name: "ProStrike Heavy Boxing Bag",
    category: "Combat Sports",
    features: ["Pre-filled heavy duty", "Includes mounting chain"],
    price: 120.00,
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 26,
    name: "Cast Iron Kettlebell (16kg)",
    category: "Fitness",
    features: ["Wide grip handle", "Flat bottom base"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 27,
    name: "High-Density Foam Roller",
    category: "Fitness",
    features: ["Deep tissue massage", "Extra firm design"],
    price: 19.99,
    image: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },
  {
    id: 28,
    name: "Apex Pro Table Tennis Racket",
    category: "Racket Sports",
    features: ["5-ply wood + 2 carbon", "Max spin tension rubber"],
    price: 114.50,
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&q=80&w=800",
    inStock: true
  },

];

export const articles: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for Better Running Form",
    category: "Fitness & Health",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600",
    excerpt: "Improve your efficiency and reduce injury risk with these easy-to-implement tweaks to your daily run."
  },
  {
    id: 2,
    title: "ThunderStrike Bat Review",
    category: "Equipment Reviews",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600",
    excerpt: "We put the new ThunderStrike Cricket Bat to the test. Here's what our pros had to say about its balance and power."
  },
  {
    id: 3,
    title: "Journey to the Top: Sarah's Story",
    category: "Athlete Stories",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600",
    excerpt: "Discover how national champion Sarah Johnson overcame setbacks and trained her way to victory."
  },
  {
    id: 4,
    title: "Ultimate Core Workout Guide",
    category: "Workout Guides",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
    excerpt: "Build a solid foundation with this comprehensive 20-minute core routine you can do anywhere."
  }
];
