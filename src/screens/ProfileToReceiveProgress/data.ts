import { OrderStatusStep } from '../../components/OrderStatus';

export const completedSteps: OrderStatusStep[] = [
  {
    title: 'Packed',
    description:
      'Your parcel is packed and will be handed over to our delivery partner.',
    dateTime: 'April,19 12:31',
    state: 'active',
  },
  {
    title: 'On the Way to Logistic Facility',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    dateTime: 'April,19 16:20',
    state: 'active',
  },
  {
    title: 'Arrived at Logistic Facility',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    dateTime: 'April,19 19:07',
    state: 'active',
  },
  {
    title: 'Shipped',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    dateTime: 'April,20 06:15',
    state: 'active',
  },
  {
    title: 'Out for Delivery',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    dateTime: 'April,22 11:10',
    state: 'active',
  },
  {
    title: 'Attempt to deliver your parcel was not successful ➡️',
    description: '',
    dateTime: 'April,19 12:50',
    state: 'error',
    highlight: true,
  },
];

export const steps: OrderStatusStep[] = [
  {
    title: 'Packed',
    description:
      'Your parcel is packed and will be handed over to our delivery partner.',
    dateTime: 'April,19 12:31',
    state: 'active',
  },
  {
    title: 'On the Way to Logistic Facility',
    description: 'Your order is in transit.',
    dateTime: 'April,19 16:20',
    state: 'active',
  },
  {
    title: 'Arrived at Logistic Facility',
    description: 'Arrived at the local logistic center.',
    dateTime: 'April,19 19:07',
    state: 'active',
  },
  {
    title: 'Shipped',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    dateTime: 'April,20',
    state: 'pending',
    expected: true,
  },
];
