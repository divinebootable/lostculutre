import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import SingUpPage from 'src/pages/signup';
import DashboardLayout from 'src/layouts/dashboard';
import LogoOnlyLayout from 'src/layouts/auth-layout';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'dashboard',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'app', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
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
    { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
