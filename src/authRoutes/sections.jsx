import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import About from 'src/pages/About';
import HomePage from 'src/HomePage';
import SingUpPage from 'src/pages/signup';
import Contestant from 'src/pages/contestants';
import LogoOnlyLayout from 'src/layouts/auth-layout';
import VotingCategory from 'src/pages/voters-category';
import RegistrationSuccess from 'src/pages/RegistrationSuccess';

export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function AuthRouter() {
  return useRoutes([
    {
      path: 'auth',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SingUpPage /> },
        { path: 'registration-success', element: <RegistrationSuccess /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '/', element: <Navigate to="auth/login" replace /> },
    { path: 'home', element: <HomePage /> },
    { path: 'about', element: <About /> },
    { path: 'contestants', element: <Contestant /> },
    { path: 'votingcategory', element: <VotingCategory /> },
    { path: 'registration-success', element: <RegistrationSuccess /> },
  ]);
}
