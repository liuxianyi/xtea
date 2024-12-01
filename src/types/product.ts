export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tea' | 'packaging' | 'local';
}

export interface Category {
  id: 'tea' | 'packaging' | 'local';
  name: string;
  description: string;
}