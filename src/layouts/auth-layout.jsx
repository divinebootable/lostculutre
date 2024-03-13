import { Outlet } from 'react-router-dom';

import Logo from 'src/components/logo/logo';

export default function LogoOnlyLayout() {
  return (
    <>
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Outlet />
    </>
  );
}
