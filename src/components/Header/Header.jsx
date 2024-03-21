/* eslint-disable arrow-body-style  */
/* eslint-disable react/prop-types  */
import { Box, Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography variant="h2" color="grey" fontWeight="bold" sx={{ m: '0 0 5px 0' }}>
        {title}
      </Typography>
      <Typography variant="h5" color="grey">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
