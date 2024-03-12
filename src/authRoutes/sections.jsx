import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import SingUpPage from 'src/pages/signup';
import LogoOnlyLayout from 'src/layouts/auth-layout';

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
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '/', element: <Navigate to="auth/login" replace /> },
  ]);
}
