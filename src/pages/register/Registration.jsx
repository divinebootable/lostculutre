/* eslint-disable prefer-template  */
/* eslint-disable react/jsx-curly-brace-presence  */
/* eslint-disable no-unused-vars  */
/* eslint-disable prefer-arrow-callback  */
/* eslint-disable func-names  */
/* eslint-disable arrow-body-style  */
import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, MenuItem, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const categories = [
  { id: 1, label: 'Center', value: 'Center' },
  { id: 2, label: 'Littoral', value: 'Littoral' },
  { id: 3, label: 'West', value: 'West' },
  { id: 3, label: 'South West', value: 'South West' },
  { id: 3, label: 'North West', value: 'North West' },
  { id: 3, label: 'East', value: 'East' },
];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Registration() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successful, setSuccessfull] = React.useState(false);
  const [photo_d, setPhoto] = React.useState('thanks');

  // const message = useSelector((state) => state.message);
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    gender: '',
    category: '',
    last_name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    gender: Yup.string().test(
      'len',
      'The gender must be between 1 and 20 characters.',
      (val) => val && val.toString().length >= 1 && val.toString().length <= 20
    ),
    category: Yup.string().required('This field is required'),
    last_name: Yup.string()
      .test(
        'len',
        'The last_name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    email: Yup.string().email('This is not a valid email.').required('This field is required'),
    address: Yup.string()
      .test(
        'len',
        'The law_name must be between 3 and 50 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('This field is required'),
    // photo_d: Yup.mixed()
    //   .required('required')
    //   .test('fileFormat', 'Only JPG, JPEG and PNG files are allowed', (value) => {
    //     if (value) {
    //       const supportedFormats = ['jpg', 'jpeg', 'png'];
    //       return supportedFormats.includes(value.name.split('.').pop());
    //     }
    //     return true;
    //   })
    //   .test('fileSize', 'File size must not be more than 3MB', (value) => {
    //     if (value) {
    //       return value.size <= 3145728;
    //     }
    //     return true;
    //   }),
  });

  const handleSubmit = (formValue) => {
    console.log(formValue);
    const { name, gender, category, last_name, email, password, phone, address } = formValue;
    console.log(name, gender, category, last_name, email, password, phone, address, photo_d);
    // await dispatch(
    //   addUser({
    //     first_name,
    //     last_name,
    //     email,
    //     password,
    //     address,
    //     gender,
    //     phone,
    //   })
    // );
    // await dispatch(getAllUsers());
    // await notifications(isExpertAdded);
    // handleClose();
  };

  const imageChange = (e) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };

  return (
    <div>
      <Box
        width="10%"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor="#F6EDDD"
        borderRadius="4px"
        sx={{ '&:hover': { cursor: 'pointer' } }}
        onClick={handleOpen}
      >
        <Typography component="span" variant="h5" color="white">
          <Button>Register</Button>
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                {!successful && (
                  <div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Add User
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'div'}>
                      <Box sx={{ width: '100%' }}>
                        <Grid container spacing={6}>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.name && touched.name ? 'is-invalid' : '')
                                  }
                                  label="Name"
                                  id="name"
                                  size="small"
                                  name="name"
                                  value={values.name || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.name && !!errors.name}
                                  helperText={touched.name && errors.name}
                                  required
                                  autoFocus
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.gender && touched.gender ? ' is-invalid' : '')
                                  }
                                  label="gender"
                                  id="outlined-size-small-gender"
                                  size="small"
                                  name="gender"
                                  value={values.gender || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.gender && !!errors.gender}
                                  helperText={touched.gender && errors.gender}
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  label="Select Category"
                                  select
                                  id="outlined-size-small-category"
                                  size="small"
                                  onChange={handleChange}
                                  name="category"
                                  helperText={touched.category && errors.category}
                                  value={values.category || ''}
                                >
                                  {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.last_name && touched.last_name ? 'is-invalid' : '')
                                  }
                                  label="Lastname"
                                  id="outlined-size-small-lastname"
                                  size="small"
                                  name="last_name"
                                  value={values.last_name || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.last_name && !!errors.last_name}
                                  helperText={touched.last_name && errors.last_name}
                                  required
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.email && touched.email ? ' is-invalid' : '')
                                  }
                                  label="Email Address"
                                  id="outlined-size-small-email"
                                  size="small"
                                  name="email"
                                  value={values.email || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.email && !!errors.email}
                                  helperText={touched.email && errors.email}
                                  type="email"
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.phone && touched.phone ? ' is-invalid' : '')
                                  }
                                  label="phonenumber"
                                  id="phone"
                                  size="small"
                                  name="phone"
                                  value={values.phone || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.phone && !!errors.phone}
                                  helperText={touched.phone && errors.phone}
                                  type="tel"
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.address && touched.address ? ' is-invalid' : '')
                                  }
                                  label="address"
                                  id="outlined-size-small"
                                  size="small"
                                  name="address"
                                  value={values.address || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.address && !!errors.address}
                                  helperText={touched.address && errors.address}
                                />
                              </div>
                            </Box>
                          </Grid>
                          {/* <Grid item xs={6}>
                  <Box
                    component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        label="Select"
                        select
                        id="outlined-size-small"
                        defaultValue="Role"
                        size="small"
                        helperText="Select role"
                      >
                        {roles.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </Box>
                </Grid> */}
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.password && touched.password ? ' is-invalid' : '')
                                  }
                                  id="outlined-password-input"
                                  label="Password"
                                  type="password"
                                  size="small"
                                  name="password"
                                  value={values.password || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.password && !!errors.password}
                                  helperText={touched.password && errors.password}
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.passwordConfirmation && touched.passwordConfirmation
                                      ? ' is-invalid'
                                      : '')
                                  }
                                  id="outlined-passwordConfirmation-input"
                                  label="Confirm password"
                                  type="password"
                                  size="small"
                                  name="passwordConfirmation"
                                  value={values.passwordConfirmation || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    !!touched.passwordConfirmation && !!errors.passwordConfirmation
                                  }
                                  helperText={
                                    touched.passwordConfirmation && errors.passwordConfirmation
                                  }
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.photo_d && touched.photo_d ? ' is-invalid' : '')
                                  }
                                  id="outlined-photo"
                                  label="Photo Upload"
                                  type="file"
                                  size="small"
                                  onChange={imageChange}
                                  onBlur={handleBlur}
                                  error={!!touched.photo_d && !!errors.photo_d}
                                  helperText={touched.photo_d && errors.photo_d}
                                  required
                                />
                              </div>
                            </Box>
                          </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" endIcon={<SaveAltIcon />}>
                          Save
                        </Button>
                      </Box>
                    </Typography>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
