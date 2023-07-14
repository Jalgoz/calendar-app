export interface CalendarProps {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: {
    _id: string;
    name: string;
  };
}

export interface CalendarEventProps {
  event: CalendarProps
}