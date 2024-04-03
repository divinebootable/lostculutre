import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import SingUpPage from 'src/pages/signup';
import DashboardLayout from 'src/layouts/dashboard';
import LogoOnlyLayout from 'src/layouts/auth-layout';

import About from '../pages/About';
import HomePage from '../pages/HomePage';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const CompetitionPage = lazy(() => import('src/pages/competition'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: '/', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'competition', element: <CompetitionPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'auth',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SingUpPage /> },
        { path: '404', element: <Page404 /> },
      ],
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
