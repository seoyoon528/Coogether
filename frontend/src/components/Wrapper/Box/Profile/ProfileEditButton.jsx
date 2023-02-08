import React from 'react';

// MUI
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

export default function ProfileEditButton(props) {
  const { setIsInputActive, isInputActive, className } = props;
  return (
    <button
      className={className}
      onClick={event => {
        event.preventDefault();
        if (isInputActive) {
          setIsInputActive(false);
        } else {
          setIsInputActive(true);
        }
      }}
    >
      {!isInputActive && <EditIcon fontSize="large" />}
      {isInputActive && <DoneIcon fontSize="large" />}
    </button>
  );
}
