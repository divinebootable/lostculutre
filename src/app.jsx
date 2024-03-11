/* eslint-disable perfectionist/sort-imports */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import ThemeProvider from 'src/theme';
import Router from 'src/routes/sections';
import RouterUser from './userRoutes/sections';
import CircularIndeterminate from './components/loading';

// ----------------------------------------------------------------------

export default function App() {
  const { token, isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const AccessToken = useCallback(() => {
    const user = token;
    if (user && isLoggedIn) {
      try {
        return user === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
      } catch (error) {
        console.log('error error');
        return error;
      }
    } else {
      console.log('loop');
      navigate('/signup', { replace: true });
      return false;
    }
  }, [token, isLoggedIn, navigate]);

  useEffect(() => {
    AccessToken();
  }, [AccessToken]);

  useScrollToTop();

  if (isLoading) return <CircularIndeterminate />;

  return isAdmin ? (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  ) : (
    <ThemeProvider>
      <RouterUser />
    </ThemeProvider>
  );
}
