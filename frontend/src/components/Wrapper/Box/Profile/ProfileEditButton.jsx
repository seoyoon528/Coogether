import React from 'react';
import axios from 'axios';
// MUI
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

export default function ProfileEditButton(props) {
  const { isEditActive, setIsEditActive, className, userInformation } = props;
  return (
    <button
      className={className}
      onClick={async event => {
        event.preventDefault();
        if (isEditActive) {
          const formData = new FormData();
          const requestInfo = {
            url: '',
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: '',
          };
          try {
            const response = await axios(requestInfo);
          } catch (error) {
            console.log(error);
          }
          setIsEditActive(false);
        } else {
          setIsEditActive(true);
        }
      }}
    >
      {!isEditActive && <EditIcon fontSize="large" />}
      {isEditActive && <DoneIcon fontSize="large" />}
    </button>
  );
}
