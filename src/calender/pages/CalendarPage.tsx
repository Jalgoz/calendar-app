import { CSSProperties, useState } from 'react';

import { Calendar, View } from 'react-big-calendar';

import { LANGUAGE } from '../../constants';
import { events } from '../../fixtures/caldendarFixtures';
import { CalendarEvent, CalendarModal, Navbar } from '../';
import { getMessagesCalendar, localizer } from '../../helpers';
import type { CalendarProps } from './types';

import { calendarStyle, eventStyleSelected } from './styles';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarPage = () => {
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) || 'week',
  );

  const eventStyleGetter = (
    event: CalendarProps,
    start: Date,
    end: Date,
    isSelected: boolean,
  ): { className?: string; style?: CSSProperties } => {
    // console.log({ event, start, end });
    const style = isSelected ? eventStyleSelected : {};
    return { style };
  };

  const onDoubleClick = (event: CalendarProps) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event: CalendarProps) => {
    console.log({ click: event });
  };

  const onViewChanged = (typeView: View) => {
    localStorage.setItem('lastView', typeView);
    setLastView(typeView);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture={LANGUAGE}
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={calendarStyle}
        messages={getMessagesCalendar(LANGUAGE)}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  );
};

export default CalendarPage;
