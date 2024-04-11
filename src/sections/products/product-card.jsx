/* eslint-disable no-unused-vars  */
/* eslint-disable unused-imports/no-unused-imports  */
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { buyProduct } from 'src/features/shop/shopSlice';

import Label from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

export default function ShopProductCard({ product }) {
  const buttonStyle = {
    backgroundColor: 'grey', // Set the desired background color here
    color: 'white', // Set the text color
  };
  const [quantity, setQuantity] = useState(null); // State for the input field

  const initialValues = {
    contestant: '',
    size: '',
    amount: '',
    number: '',
    gender: '',
  };

  const handleQuantityChange = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };
  const renderStatus = (
    <Label
      variant="filled"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );
  const renderSize = <Typography variant="subtitle1">{product.size}</Typography>;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {renderSize}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Stack>
        <TextField
          type="number"
          label="Orange or Mtn number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{
            inputProps: { min: 1 },
          }}
        />
        <Button size="medium" style={buttonStyle}>
          Buy
        </Button>
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};
