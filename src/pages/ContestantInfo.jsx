import PropTypes from 'prop-types';
import React, { useState } from 'react';


function ContestantInfo({ name, gender, region, description }) {
 const [profilePictureSrc, setProfilePictureSrc] = useState('');

 const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
 };

 return (
    <div>
      <h2>Contestant Information:</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Profile Picture:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              <input type="file" onChange={handleFileChange} />
              {profilePictureSrc && (
                <img src={profilePictureSrc} alt="Contestant's profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              )}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Name:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Gender:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{gender}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Region of Origin:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{region}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Description:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{description}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Status:</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              <span style={{ backgroundColor: 'yellow', padding: '3px 6px', borderRadius: '5px' }}>Pending</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 );
}

ContestantInfo.propTypes = {
 name: PropTypes.string.isRequired,
 gender: PropTypes.string.isRequired,
 region: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired,
};

export default ContestantInfo;
