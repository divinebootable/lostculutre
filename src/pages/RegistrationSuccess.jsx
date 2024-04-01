import React from 'react';

// import { makeStyles } from '@mui/styles';
import { Box, Alert, Button, useTheme, AlertTitle, useMediaQuery } from '@mui/material';

const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginTop: theme.spacing(2), // Adjust as per your requirement
//   },
// }));

function RegistrationSuccess() {
  const isMobile = useIsMobile();
  //   const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        flexDirection: isMobile ? 'column' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Alert variant="filled" severity="success" icon={false}>
        <AlertTitle>Registration success!</AlertTitle>
        Congratulations, your account has been created successfully.
      </Alert>
      <Button
        style={{ marginTop: '20px' }}
        variant="contained"
        color="primary"
        href="https://mail.google.com"
        target="_blank"
      >
        Check your mail to verify your account.
      </Button>
    </Box>
  );
}

export default RegistrationSuccess;
