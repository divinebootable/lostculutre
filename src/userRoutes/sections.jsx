import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import VotingCategory from 'src/pages/voters-category';
import DashboardLayout from 'src/layouts/userDashboard';

export const Register = lazy(() => import('src/pages/register'));
export const Analytics = lazy(() => import('src/pages/analytics'));
export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function RouterUser() {
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
        { path: '/', element: <IndexPage />, index: true },
        { path: 'analytics', element: <Analytics /> },
        { path: 'register', element: <Register /> },
        { path: '/user', element: <UserPage /> },
        { path: '/products', element: <ProductsPage /> },
        { path: '/blog', element: <BlogPage /> },
        
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    { path: 'votingcategory',
     element: <VotingCategory /> },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
