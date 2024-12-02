export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tea' | 'packaging' | 'local';
  benefits?: string[];
  usage?: string[];
  productionDate?: string;
  shelfLife?: string;
  origin?: string;
  storage?: string;
}

export interface Category {
  id: 'tea' | 'packaging' | 'local';
  name: string;
  description: string;
}