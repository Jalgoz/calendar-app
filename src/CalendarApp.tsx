import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';

const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default CalendarApp;
