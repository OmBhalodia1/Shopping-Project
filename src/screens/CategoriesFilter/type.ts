import { images } from '../../utils/images';

export const categoryImages = {
  Clothing: images.JustForYou3,
  Shoes: images.Shoes1,
  Bags: images.Bags3,
  Lingerie: images.Shoes4,
  Accessories: images.AllItems6,
  JustForYou: images.Lingerie3,
};

export const categories = [
  {
    label: 'Clothing',
    image: images.JustForYou3,
    subcategories: [
      'Dresses',
      'Pants',
      'Skirts',
      'Shorts',
      'Jackets',
      'Hoodies',
      'Shirts',
      'Polo',
      'T-Shirts',
      'Tunics',
    ],
  },
  { label: 'Shoes', image: images.Shoes1 },
  { label: 'Bags', image: images.Bags3 },
  { label: 'Lingerie', image: images.Shoes4 },
  { label: 'Accessories', image: images.AllItems2 },
];

export const genderTabs = ['All', 'Female', 'Male'];
