import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AUTHENTICATED, AUTH_STATUS, CALENDAR_ROUTE } from '../constants';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (AUTH_STATUS === AUTHENTICATED) {
      navigate(CALENDAR_ROUTE);
    }
  }, [navigate])

  return <Outlet />;
};

export default Auth;
