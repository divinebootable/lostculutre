/* eslint-disable perfectionist/sort-imports */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable dot-notation */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import 'src/global.css';
import 'src/components/homepage/index.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import ThemeProvider from 'src/theme';
import Router from 'src/routes/sections';
import AuthRouter from './authRoutes/sections';
import RouterUser from './userRoutes/sections';
import CircularIndeterminate from './components/loading';

// import { checkIfUserLoggedIn } from './features/authentication/authSlice';

// ----------------------------------------------------------------------

export default function App() {
  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  // const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log(user);
    console.log(isLoggedIn);
    console.log(user.is_superuser);
    if (user) {
      try {
        return user.is_superuser === true ? setIsAdmin(true) : setIsAdmin(false);
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
