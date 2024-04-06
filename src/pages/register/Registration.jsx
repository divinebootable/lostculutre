/* eslint-disable prefer-template  */
/* eslint-disable react/jsx-curly-brace-presence  */
/* eslint-disable no-unused-vars  */
/* eslint-disable prefer-arrow-callback  */
/* eslint-disable func-names  */
/* eslint-disable arrow-body-style  */
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import React, { useRef, useState } from 'react';

import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, MenuItem, useTheme, TextField, Typography, useMediaQuery } from '@mui/material';

import { register } from 'src/features/competionRegistration/registerSlice';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '6oovw',
//   flexDirection: isMobile ? 'column' : 'column',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

const categories = [
  { id: 1, label: 'Center', value: 'Center' },
  { id: 2, label: 'Littoral', value: 'Littoral' },
  { id: 3, label: 'West', value: 'West' },
  { id: 3, label: 'South West', value: 'South West' },
  { id: 3, label: 'North West', value: 'North West' },
  { id: 3, label: 'East', value: 'East' },
];
const Yde = [
  { id: 1, label: 'Center', value: 'Center' },
  { id: 2, label: 'Littoral', value: 'Littoral' },
  { id: 3, label: 'West', value: 'West' },
  { id: 3, label: 'South West', value: 'South West' },
  { id: 3, label: 'North West', value: 'North West' },
  { id: 3, label: 'East', value: 'East' },
];
const Dla = [
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
  const isMobile = useIsMobile();
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successful, setSuccessfull] = useState(false);
  const [photo_d, setPhoto] = useState({});

  // const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    gender: '',
    category: '',
    stage_name: '',
    facebook: '',
    youtube: '',
    instagram: '',
    bio: '',
  };

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
    stage_name: Yup.string()
      .test(
        'len',
        'The stage_name must be between 1 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    facebook: Yup.string().required('This field is required'),
    youtube: Yup.string()
      .test(
        'len',
        'The law_name must be between 5 and 100 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    instagram: Yup.string().required('This field is required'),
    bio: Yup.string()
      .test(
        'len',
        'The stage_name must be between 10 and 1000 characters.',
        (val) => val && val.toString().length >= 10 && val.toString().length <= 1000
      )
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
  const formData = new FormData();

  const handleSubmit = (formValue) => {
    const { name, gender, category, stage_name, facebook, instagram, youtube, bio } = formValue;
    console.log('PHOTO!!!!!!');
    console.log(formValue);

    formData.append('name', name);
    formData.append('gender', gender);
    formData.append('category', category);
    formData.append('stage_name', stage_name);
    formData.append('facebook', facebook);
    formData.append('instagram', instagram);
    formData.append('youtube', youtube);
    formData.append('photo_d', photo_d);
    console.log(photo_d);
    console.log('FORM!!!!');
    console.log(formData);
    console.log('FORM!!!!');
    dispatch(
      register({
        name,
        gender,
        category,
        stage_name,
        facebook,
        instagram,
        youtube,
        photo_d,
      })
    );
    // await dispatch(getAllUsers());
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
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'column',
        }}
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
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '6oovw',
            flexDirection: isMobile ? 'column' : 'column',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
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
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
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
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
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
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{ '& .MuiTextField-root': { m: 1, width: '20ch' } }}
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
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.stage_name && touched.stage_name ? 'is-invalid' : '')
                                  }
                                  label="Stage Name"
                                  id="outlined-size-small-lastname"
                                  size="small"
                                  name="stage_name"
                                  value={values.stage_name || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.stage_name && !!errors.stage_name}
                                  helperText={touched.stage_name && errors.stage_name}
                                  required
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
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
                                  label="FaceBook Link"
                                  id="outlined-size-small-email"
                                  size="small"
                                  name="facebook"
                                  value={values.facebook || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.facebook && !!errors.facebook}
                                  helperText={touched.facebook && errors.facebook}
                                  type="text"
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
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
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.instagram && touched.instagram ? ' is-invalid' : '')
                                  }
                                  id="outlined-password-input"
                                  label="Instagrm Link"
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
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.bio && touched.bio ? ' is-invalid' : '')
                                  }
                                  id="outlined-password-input"
                                  label="Your Bio"
                                  type="text area"
                                  size="large"
                                  name="bio"
                                  value={values.bio || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.bio && !!errors.bio}
                                  helperText={touched.bio && errors.bio}
                                />
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
                              }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <h3 style={{ color: 'black', fontSize: '20px' }}>
                                  Upload your Image
                                </h3>
                              </div>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6} lg={5}>
                            <Box
                              sx={{
                                '& .MuiTextField-root': { m: 1, width: '20ch' },
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
                                  type="file"
                                  size="small"
                                  name="photo_d"
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
