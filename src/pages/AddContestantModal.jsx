import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

import ContestantInfo from './ContestantInfo';

const style = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 400,
 bgcolor: 'background.paper',
 border: '2px solid #000',
 boxShadow: 24,
 p: 4,
};

export default function AddContestantModal() {
 const [open, setOpen] = useState(false);
 const [contestantInfo, setContestantInfo] = useState({
    name: '',
    gender: '',
    region: '',
    profilePicture: '',
    description: '',
    facebookLink: '', 
    youtubeLink: '', 

 });
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    handleClose();
 };

 const handleProfilePictureChange = (event) => {
    setContestantInfo({
      ...contestantInfo,
      profilePicture: event.target.files[0] ? event.target.files[0].name : '',
    });
 };

 return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Contestant
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Add Contestant
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setContestantInfo({ ...contestantInfo, name: e.target.value })}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                 labelId="gender-label"
                 id="gender"
                 value={contestantInfo.gender}
                 onChange={(e) => setContestantInfo({ ...contestantInfo, gender: e.target.value })}
                >
                 <MenuItem value="male">Male</MenuItem>
                 <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel id="region-label">Region of Participation</InputLabel>
                <Select
                 labelId="region-label"
                 id="region"
                 value={contestantInfo.region}
                 onChange={(e) => setContestantInfo({ ...contestantInfo, region: e.target.value })}
                >
                 <MenuItem value="northAmerica">South West</MenuItem>
                 <MenuItem value="north">North West</MenuItem>
                 <MenuItem value="center">Center</MenuItem>
                 <MenuItem value="littoral">Littoral</MenuItem>
                 <MenuItem value="east">East</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                onChange={(e) => setContestantInfo({ ...contestantInfo, description: e.target.value })}
              />
                <TextField
                margin="normal"
                fullWidth
                id="facebookLink"
                label="Facebook Link"
                name="facebookLink"
                autoComplete="facebookLink"
                onChange={(e) => setContestantInfo({ ...contestantInfo, facebookLink: e.target.value })}
              />
              <TextField
                margin="normal"
                fullWidth
                id="youtubeLink"
                label="YouTube Link"
                name="youtubeLink"
                autoComplete="youtubeLink"
                onChange={(e) => setContestantInfo({ ...contestantInfo, youtubeLink: e.target.value })}
              />
              <div>
                <label htmlFor="profile-picture">
                 <Button variant="contained" component="span">
                    Upload Profile Picture
                 </Button>
                 <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profile-picture"
                  type="file"
                  onChange={handleProfilePictureChange}
                 />
                </label>
              </div>
              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Submit
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
      {isSubmitted && <ContestantInfo {...contestantInfo} />}
    </div>
 );
}
