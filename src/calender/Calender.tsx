import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { AUTH_STATUS, LOGIN_ROUTE, NOT_AUTHENTICATED } from '../constants';

const Calender = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (AUTH_STATUS === NOT_AUTHENTICATED) {
      navigate(LOGIN_ROUTE);
    }
  }, [navigate])
  
  return <Outlet />;
};

export default Calender;
