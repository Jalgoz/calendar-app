import { addHours } from 'date-fns';

import type { CalendarProps } from '../calender/pages/types';

export const events: CalendarProps[] = [
  {
    title: "Boss's birthday",
    notes: 'Have to buy cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Jose',
    },
  },
];
