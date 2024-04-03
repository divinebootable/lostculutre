import { Helmet } from 'react-helmet-async';

import { CompetitionView } from 'src/sections/Competition/view';

// ----------------------------------------------------------------------

export default function CompetitionPage() {
  return (
    <>
      <Helmet>
        <title> Competition | LOST CULTURE </title>
      </Helmet>

      <CompetitionView />
    </>
  );
}
