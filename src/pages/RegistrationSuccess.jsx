import React from 'react';

import { Box, Alert, Button } from '@mui/material';

// const useIsMobile = () => {
//   const theme = useTheme();
//   return useMediaQuery(theme.breakpoints.down('md'));
// };

function RegistrationSuccess() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Alert variant="filled" severity="success" icon={false} sx={{ mb: 2 }}>
        <strong>Registration success!</strong>
        <br />
        Congratulations, your account has been created successfully.
      </Alert>
      <Button
        variant="contained"
        color="primary"
        href="https://mail.google.com"
        target="_blank"
        sx={{ mt: 2 }}
      >
        Check your mail to verify your account
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="auth/login" // Link to the login page
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}

export default RegistrationSuccess;
