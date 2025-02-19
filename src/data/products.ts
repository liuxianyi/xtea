import { Product, Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'tea',
    name: '当季茶叶',
    description: '精选新鲜茶叶，保证品质',
  },
  {
    id: 'packaging',
    name: '茶叶包装',
    description: '精美包装，送礼首选',
  },
  {
    id: 'local',
    name: '特色山货',
    description: '天然野生，健康养生',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: '春茶龙井',
    description: '明前采摘，清香持久',
    price: 288,
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=800',
    category: 'tea',
  },
  {
    id: '2',
    name: '武夷岩茶',
    description: '岩韵浓郁，回甘悠长',
    price: 368,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800',
    category: 'tea',
  },
  {
    id: '3',
    name: '复古茶叶罐',
    description: '陶瓷材质，密封保鲜',
    price: 128,
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800',
    category: 'packaging',
  },
  {
    id: '4',
    name: '礼品包装盒',
    description: '高档丝绸，送礼体面',
    price: 88,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800',
    category: 'packaging',
  },
  {
    id: '5',
    name: '野生黑木耳',
    description: '农家自产，天然无污染',
    price: 98,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=800',
    category: 'local',
  },
  {
    id: '6',
    name: '葛根粉',
    description: '纯天然，无添加',
    price: 58,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800',
    category: 'local',
  },
];