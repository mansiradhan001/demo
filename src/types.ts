export interface Product {
  id: number;
  name: string;
  category: string;
  features: string[];
  price: number;
  image: string;
  inStock: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
}
