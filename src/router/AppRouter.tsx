import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Auth, LoginPage } from '../auth';
import { Calender, CalendarPage } from '../calender';
import { ANY_ROUTE, AUTH_ROUTE, CALENDAR_ROUTE, LOGIN_ROUTE } from '../constants';

export const AppRouter = createBrowserRouter([
  {
    element: <Calender />,
    children: [
      {
        path: CALENDAR_ROUTE,
        element: <CalendarPage />
      },
      { 
        path: ANY_ROUTE,
        element: <Navigate to={CALENDAR_ROUTE} />
      }
    ]
  },
  {
    path: AUTH_ROUTE,
    element: <Auth />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <LoginPage />
      },
      {
        path: AUTH_ROUTE + ANY_ROUTE,
        element: <Navigate to={LOGIN_ROUTE} />
      },
    ]
  },
]);
