import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Analytics',
    path: 'analytics',
    icon: icon('ic_user'),
  },
  {
    title: 'Contestants',
    path: 'user',
    icon: icon('ic_user'),
  },
  {
    title: 'Competition',
    path: 'competition',
    icon: icon('ic_user'),
  },
  {
    title: 'shop',
    path: 'products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: 'blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
