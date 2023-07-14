import type { CalendarEventProps } from "../pages/types";

const CalendarEvent = ({ event }: CalendarEventProps) => {
  const { title, user } = event;

  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
};

export default CalendarEvent;
