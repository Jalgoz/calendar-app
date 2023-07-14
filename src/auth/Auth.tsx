import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /* if (AUTH_STATUS === AUTHENTICATED) {
      navigate(CALENDAR_ROUTE);
    } */
  }, [navigate])

  return <Outlet />;
};

export default Auth;
