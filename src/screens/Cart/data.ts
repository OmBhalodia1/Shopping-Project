import { images } from '../../utils/images';

export const CartItems = [
  {
    id: 'item1',
    image: images.AllItems2,
    price: 17,
    discountedPrice: undefined,
    subtext: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
  },
  {
    id: 'item2',
    image: images.AllItems4,
    price: 17,
    discountedPrice: undefined,
    subtext: 'Lorem ipsum dolor sit amet consectetur.',
    quantity: 1,
  },
];

export const wishlistItems = [
  { image: images.JustForYou3, price: 17 },
  { image: images.JustForYou1, price: 17, discountedPrice: 12 },
  { image: images.MostPopular1, price: 27 },
  { image: images.JustForYou2, price: 19 },
  { image: images.MostPopular2, price: 17 },
  { image: images.MostPopular3, price: 17 },
];
