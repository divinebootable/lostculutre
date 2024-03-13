import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, useFormik, FormikProvider } from 'formik';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';
import { signup } from 'src/features/authentication/authSlice';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
// import { error } from 'src/theme/palette';

// ----------------------------------------------------------------------

export default function SignUpView() {
  const theme = useTheme();

  //   const router = useRouter()
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(1, 'Too Short!')
      .max(200, 'Too Long!')
      .required('First name required'),
    last_name: Yup.string()
      .min(1, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required(),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const { first_name, last_name, email, password } = formik.values;
      console.log(first_name, last_name, email, password);
      dispatch(signup({ first_name, last_name, email, password }))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  //   const handleClick = () => {
  //     router.push('/login');
  //   };
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const renderForm = (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            {...getFieldProps('first_name')}
            error={Boolean(touched.first_name && errors.first_name)}
            helperText={touched.first_name && errors.first_name}
            name="first_name"
            label="First name"
          />
          <TextField
            {...getFieldProps('last_name')}
            error={Boolean(touched.last_name && errors.last_name)}
            helperText={touched.last_name && errors.last_name}
            name="last_name"
            label="Last name"
          />
          <TextField
            name="email"
            l
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            name="confirm_password"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...getFieldProps('confirm_password')}
            error={Boolean(touched.confirm_password && errors.confirm_password)}
            helperText={touched.confirm_password && errors.confirm_password}
          />
        </Stack>

        {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

        <LoadingButton
          fullWidth
          size="small"
          loading={isSubmitting}
          type="submit"
          variant="contained"
          color="inherit"
          sx={{ mt: 3 }}
        >
          SignUp
        </LoadingButton>
      </Form>
    </FormikProvider>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
        mt: 20,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign up</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Already have an account?
            <Link href="login" variant="subtitle2" sx={{ ml: 0.5 }}>
              Login
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
