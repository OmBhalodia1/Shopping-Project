import { ProfileOrderProps } from '../../components/ProfileOrder';
import { images } from '../../utils/images';

export const ORDERS: ProfileOrderProps[] = [
  {
    images: [images.Shoes1, images.Shoes2, images.Shoes3],
    orderId: '92287157',
    itemsCount: 4,
    deliveryType: 'Standard Delivery',
    mode: 'packed',
    buttonText: 'Track',
  },
  {
    images: [
      images.AllItems2,
      images.AllItems4,
      images.AllItems6,
      images.AllItems8,
    ],
    orderId: '92287157',
    itemsCount: 3,
    deliveryType: 'Standard Delivery',
    mode: 'shipped',
    buttonText: 'Track',
  },
  {
    images: [images.JustForYou2, images.JustForYou3],
    orderId: '92287157',
    itemsCount: 2,
    deliveryType: 'Standard Delivery',
    mode: 'delivered',
    buttonText: 'Review',
  },
  {
    images: [
      images.AllItems2,
      images.AllItems4,
      images.AllItems6,
      images.AllItems8,
    ],
    orderId: '92287157',
    itemsCount: 2,
    deliveryType: 'Standard Delivery',
    mode: 'delivered',
    buttonText: 'Review',
  },
  {
    images: [images.MostPopular1],
    orderId: '92287157',
    itemsCount: 2,
    deliveryType: 'Standard Delivery',
    mode: 'delivered',
    buttonText: 'Review',
  },
];
