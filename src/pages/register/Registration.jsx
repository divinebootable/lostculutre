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
import { Box, Input, MenuItem, TextField, Typography } from '@mui/material';

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
  { id: 1, label: 'Center' },
  { id: 2, label: 'Littoral' },
  { id: 3, label: 'West' },
  { id: 3, label: 'South West' },
  { id: 3, label: 'North West' },
  { id: 3, label: 'East' },
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

  // const message = useSelector((state) => state.message);
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    gender: '',
    stage_name: '',
    category: '',
    photo_d: '',
    facebook: '',
    youtube: '',
    instagram: '',
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The first_name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    gender: Yup.string()
      .test(
        'len',
        'The last_name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    category: Yup.string().test(
      'len',
      'The gender must be between 1 and 20 characters.',
      (val) => val && val.toString().length >= 1 && val.toString().length <= 20
    ),
    photo_d: Yup.mixed()
      .test('required', 'Please upload a Profile Photo', (value) => {
        return value != null;
      })
      .test('type', 'We only support jpeg and jpg format', function (value) {
        return (
          value &&
          (value.type === 'image/jpg' || value.type === 'image/jpeg' || value.type === 'image/png')
        );
      }),
    stage_name: Yup.string()
      .test(
        'len',
        'The law_name must be between 3 and 50 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    facebook: Yup.string().test(
      'len',
      'The law_name must be between 3 and 50 characters.',
      (val) => val && val.toString().length >= 3 && val.toString().length <= 20
    ),
    youtube: Yup.string().test(
      'len',
      'The law_name must be between 3 and 50 characters.',
      (val) => val && val.toString().length >= 3 && val.toString().length <= 20
    ),
    instagram: Yup.string().test(
      'len',
      'The law_name must be between 3 and 50 characters.',
      (val) => val && val.toString().length >= 3 && val.toString().length <= 20
    ),
  });

  const handleSubmit = async (formValue) => {
    const { first_name, last_name, email, password, phone, address, gender } = formValue;
    console.log(first_name, last_name, email, password, phone, address, gender);
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
                      Register for contest
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
                                    (errors.gender && touched.gender ? 'is-invalid' : '')
                                  }
                                  label="Gender"
                                  id="outlined-size-small"
                                  size="small"
                                  name="gender"
                                  value={values.gender || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.gender && !!errors.gender}
                                  helperText={touched.gender && errors.gender}
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
                                  label="Select"
                                  select
                                  id="outlined-size-small"
                                  defaultValue="Role"
                                  size="small"
                                  helperText="Select Category"
                                >
                                  {categories.map((option) => (
                                    <MenuItem key={option.label} value={option.label}>
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
                                    (errors.stage_name && touched.stage_name ? ' is-invalid' : '')
                                  }
                                  label="Stage Name"
                                  id="stageName"
                                  size="small"
                                  name="stage_name"
                                  value={values.stage_name || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.stage_name && !!errors.stage_name}
                                  helperText={touched.stage_name && errors.stage_name}
                                  type="text"
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
                                    (errors.facebook && touched.facebook ? ' is-invalid' : '')
                                  }
                                  label="Facebook link"
                                  id="outlined-size-small"
                                  size="small"
                                  name="facebook"
                                  value={values.facebook || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.facebook && !!errors.facebook}
                                  helperText={touched.facebook && errors.facebook}
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
                                    (errors.youtube && touched.youtube ? ' is-invalid' : '')
                                  }
                                  label="Youtube Link"
                                  id="outlined-size-small"
                                  size="small"
                                  name="youtube"
                                  value={values.youtube || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.youtube && !!errors.youtube}
                                  helperText={touched.youtube && errors.youtube}
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
                                  label="Instagram Link"
                                  type="text"
                                  size="small"
                                  name="instagram"
                                  value={values.instagram || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.instagram && !!errors.instagram}
                                  helperText={touched.instagram && errors.instagram}
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box>
                              <div>
                                <Button>
                                  Upload Image
                                  <Input
                                    className={
                                      'form-control' +
                                      (errors.photo_d && touched.photo_d ? ' is-invalid' : '')
                                    }
                                    value={values.photo_d || ''}
                                    name="photo_d"
                                    placeholder="Image Upload"
                                    type="file"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!!touched.photo_d && !!errors.photo_d}
                                    helperText={touched.photo_d && errors.photo_d}
                                  />
                                </Button>
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
