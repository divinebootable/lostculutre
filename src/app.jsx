/* eslint-disable perfectionist/sort-imports */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  const { token, isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backButton = () => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  };

  const AccessToken = () => {
    const user = token;
    if (user && isLoggedIn) {
      try {
        return user === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
      } catch {
        console.log('error error');
      }
    } else {
      console.log('loop');
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    AccessToken();
    backButton();
  }, [token]);

  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
