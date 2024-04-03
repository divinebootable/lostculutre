/* eslint-disable prefer-template  */
/* eslint-disable react/jsx-curly-brace-presence  */
/* eslint-disable no-unused-vars  */
/* eslint-disable prefer-arrow-callback  */
/* eslint-disable func-names  */
/* eslint-disable arrow-body-style  */
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

const competition = [{ id: 1, label: 'lost Culture', value: 1 }];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function AddCategory() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successful, setSuccessfull] = useState(false);
  const [voting_image, setVotingImage] = useState(null);

  // const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    voting_name: '',
    election: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The name must be between 3 and 20 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required('This field is required'),
    voting_name: Yup.string()
      .test(
        'len',
        'The name must be between 3 and 100 characters.',
        (val) => val && val.toString().length >= 3 && val.toString().length <= 100
      )
      .required('This field is required'),
    election: Yup.string().required('This field is required'),
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
    const { name, voting_name, election } = formValue;
    console.log('PHOTO!!!!!!');
    console.log(formValue);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('voting_name', voting_name);
    formData.append('election', election);
    console.log(voting_image);
    console.log('FORM!!!!');
    console.log(formData);
    console.log('FORM!!!!');
    dispatch(
      register({
        name,
        voting_name,
        election,
        voting_image,
      })
    );
    // await dispatch(getAllUsers());
    // handleClose();
  };

  const imageChange = (e) => {
    console.log(e.target.files[0]);
    setVotingImage(e.target.files[0]);
  };

  return (
    <div>
      <Box
        width="10%"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor="green"
        borderRadius="4px"
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'column',
        }}
        onClick={handleOpen}
      >
        <Typography variant="h5" color="white">
          ADD CATGEGORY
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
                      Add Category
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
                                    (errors.voting_name && touched.voting_name ? ' is-invalid' : '')
                                  }
                                  label="Voting Name"
                                  id="outlined-size-small-gender"
                                  size="small"
                                  name="voting_name"
                                  value={values.voting_name || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.voting_name && !!errors.voting_name}
                                  helperText={touched.voting_name && errors.voting_name}
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
                                  className={
                                    'form-control' +
                                    (errors.election && touched.election ? ' is-invalid' : '')
                                  }
                                  label="Select Competition"
                                  select
                                  id="outlined-size-small-category"
                                  size="small"
                                  onChange={handleChange}
                                  name="election"
                                  helperText={touched.election && errors.election}
                                  value={values.election || ''}
                                >
                                  {competition.map((option) => (
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
                                <h3 style={{ color: 'black', fontSize: '20px' }}>
                                  Upload your Image below
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
                                    (errors.voting_image && touched.voting_image
                                      ? ' is-invalid'
                                      : '')
                                  }
                                  id="outlined-photo"
                                  type="file"
                                  size="small"
                                  name="voting_image"
                                  onChange={imageChange}
                                  onBlur={handleBlur}
                                  error={!!touched.voting_image && !!errors.voting_image}
                                  helperText={touched.voting_image && errors.voting_image}
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
