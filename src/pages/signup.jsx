import { Helmet } from 'react-helmet-async';

import { SignUpView } from 'src/sections/signup';

// ----------------------------------------------------------------------

export default function SingUpPage() {
  return (
    <>
      <Helmet>
        <title> Signup | Lost Culture </title>
      </Helmet>

      <SignUpView />
    </>
  );
}
