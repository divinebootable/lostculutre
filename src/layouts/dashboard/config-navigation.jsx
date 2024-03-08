import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/user',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Analytics',
    path: '/',
    icon: icon('ic_user'),
  },
  {
    title: 'Contestants',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Register to Participate',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Profile',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Shop',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
