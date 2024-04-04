/* eslint-disable prefer-template  */
/* eslint-disable no-unused-vars  */
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, useTheme, Typography, useMediaQuery } from '@mui/material';
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import { addCompetition } from 'src/features/competition/competition/competitionSlice';

const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};

export default function AddCompetition() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [successful, setSuccessfull] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    start_date: '',
    end_date: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .test(
        'len',
        'The name must be between 1 and 20 characters.',
        (val) => val && val.toString().length >= 2 && val.toString().length <= 20
      )
      .required('This field is required'),
    start_date: Yup.date().required(),
    end_date: Yup.date().required(),
  });

  const handleSubmit = async (formValue) => {
    const { name, start_date, end_date } = formValue;
    console.log(name, start_date, end_date);
    await dispatch(addCompetition({ name, start_date, end_date }));
    handleClose();
  };

  return (
    <div>
      <Box
        width="30%"
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
          ADD COMPETITION
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
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      ADD COMPETITION
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <Box>
                        <Grid container rowSpacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                          <Grid item xs={2} sm={4} md={4}>
                            <Box
                              component="form"
                              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                              noValidate
                              autoComplete="off"
                            >
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.name && touched.name ? 'is-invalid' : '')
                                  }
                                  label="Competition Name"
                                  id="outlined-size-small"
                                  size="medium"
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
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.start_date && touched.start_date ? 'is-invalid' : '')
                                  }
                                  id="outlined-size-small"
                                  size="medium"
                                  name="start_date"
                                  type="date"
                                  value={values.start_date || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.start_date && !!errors.start_date}
                                  helperText={touched.start_date && errors.start_date}
                                  required
                                />
                              </div>
                              <div>
                                <TextField
                                  className={
                                    'form-control' +
                                    (errors.end_date && touched.end_date ? 'is-invalid' : '')
                                  }
                                  id="outlined-size-small"
                                  size="medium"
                                  name="end_date"
                                  type="date"
                                  value={values.end_date || ''}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.end_date && !!errors.end_date}
                                  helperText={touched.end_date && errors.end_date}
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
