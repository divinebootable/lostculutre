/* eslint-disable perfectionist/sort-imports */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import ThemeProvider from 'src/theme';
import Router from 'src/routes/sections';
import AuthRouter from './authRoutes/sections';
import RouterUser from './userRoutes/sections';
import CircularIndeterminate from './components/loading';

// ----------------------------------------------------------------------

export default function App() {
  const { token, isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = token;
    if (user) {
      try {
        return user === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
      } catch (error) {
        console.log('error error');
        return error;
      }
    }
  }, []);

  useScrollToTop();

  if (isLoading) return <CircularIndeterminate />;

  if (isLoggedIn) {
    return isAdmin ? (
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    ) : (
      <ThemeProvider>
        <RouterUser />
      </ThemeProvider>
    );
  } else {
    return <AuthRouter />;
  }
}
