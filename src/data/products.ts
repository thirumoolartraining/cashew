import premium from '@/assets/product-premium.jpg';
import organic from '@/assets/product-organic.jpg';
import roasted from '@/assets/product-roasted.jpg';
import rawImg from '@/assets/product-raw.jpg';
import honey from '@/assets/product-honey.jpg';
import spiced from '@/assets/product-spiced.jpg';
import pieces from '@/assets/product-pieces.jpg';
import butter from '@/assets/product-butter.jpg';

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricePerKgINR: number; // base price in INR
  moqKg: number;
  badges: string[];
  images: string[];
  specs: Record<string, string>;
  active: boolean;
  rating?: number;
  note?: string;
};

export const products: Product[] = [
  {
    id: 'premium-cashew',
    name: 'Premium Cashew',
    slug: 'premium-cashew',
    description: 'W320 grade premium cashews with rich, buttery flavor.',
    pricePerKgINR: 950,
    moqKg: 10,
    badges: ['Premium'],
    images: [premium, organic],
    specs: { grade: 'W320', moisture: '<5%', origin: 'India', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.8,
    note: 'W320 Grade',
  },
  {
    id: 'organic-cashew',
    name: 'Organic Cashew',
    slug: 'organic-cashew',
    description: 'Certified organic cashews, clean and naturally delicious.',
    pricePerKgINR: 1025,
    moqKg: 10,
    badges: ['Organic'],
    images: [organic, rawImg],
    specs: { certification: 'Organic', moisture: '<5%', origin: 'India', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.7,
  },
  {
    id: 'roasted-cashew',
    name: 'Roasted Cashew',
    slug: 'roasted-cashew',
    description: 'Perfectly roasted cashews with a warm, golden crunch.',
    pricePerKgINR: 980,
    moqKg: 10,
    badges: ['Roasted'],
    images: [roasted, premium],
    specs: { roast: 'Roasted', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.6,
  },
  {
    id: 'raw-cashew',
    name: 'Raw Cashew',
    slug: 'raw-cashew',
    description: 'Unroasted, pure cashews ready for your recipes.',
    pricePerKgINR: 910,
    moqKg: 10,
    badges: ['Raw'],
    images: [rawImg, pieces],
    specs: { grade: 'W320', moisture: '<5%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.5,
  },
  {
    id: 'honey-roasted-cashew',
    name: 'Honey Roasted Cashew',
    slug: 'honey-roasted-cashew',
    description: 'Glossy honey glaze with a delightful crunch.',
    pricePerKgINR: 1050,
    moqKg: 10,
    badges: ['Honey'],
    images: [honey, roasted],
    specs: { flavor: 'Honey', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.7,
  },
  {
    id: 'spiced-cashew',
    name: 'Spiced Cashew',
    slug: 'spiced-cashew',
    description: 'Vibrant chili-spiced cashews with a savory kick.',
    pricePerKgINR: 1020,
    moqKg: 10,
    badges: ['Spiced'],
    images: [spiced, roasted],
    specs: { spice: 'Chili', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.6,
  },
  {
    id: 'cashew-pieces',
    name: 'Cashew Pieces',
    slug: 'cashew-pieces',
    description: 'Economical pieces ideal for confectionery and baking.',
    pricePerKgINR: 780,
    moqKg: 10,
    badges: ['Value'],
    images: [pieces, rawImg],
    specs: { grade: 'LP', moisture: '<5%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.4,
  },
  {
    id: 'cashew-butter',
    name: 'Cashew Butter',
    slug: 'cashew-butter',
    description: 'Creamy, stone-ground cashew butter with silky texture.',
    pricePerKgINR: 890,
    moqKg: 10,
    badges: ['Butter'],
    images: [butter, premium],
    specs: { texture: 'Creamy', ingredients: '100% Cashew', packaging: '10kg food-grade pail' },
    active: true,
    rating: 4.6,
  },
];
