import React, { useState } from 'react';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import { Link } from 'react-router-dom';

function FloatBtn() {
  // 플로팅
  const actions = [
    {
      icon: (
        <Link to="/makecookroom">
          <VideoCameraFrontOutlinedIcon fontSize="large" />
        </Link>
      ),
      name: 'Broadcast ',
    },
    {
      icon: (
        <Link to="/RecipeRegister">
          <MenuBookTwoToneIcon fontSize="large" />
        </Link>
      ),
      name: 'Recipe',
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: 'fixed',
          bottom: 48,
          right: 48,
          // '.MuiButtonBase-root': { backgroundColor: '#FEBD2F' },
          '.MuiFab-root': { backgroundColor: '#FEBD2F' },
          '.MuiSpeedDialAction-staticTooltipLabel': {
            fontFamily: 'Pretendard ExtraBold',
          },
          // '.MuiFab-sizeLarge': {
          //   backgroundColor: `${open ? '#FFFFFF' : '#FEBD2F'}`,
          //   color: `${open ? 'black' : 'white'}`,
          // },
          '.MuiSpeedDial-fab ': { backgroundColor: '#FEBD2F' },
          '.css-7dv1rb-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab:hover': {
            backgroundColor: `${open ? '#FFFFFF' : '#FEBD2F'}`,
            color: `${open ? 'black' : 'white'}`,
          },
        }}
        icon={
          !open ? (
            <AddIcon style={{ fontSize: 'large' }} />
          ) : (
            <CloseIcon style={{ fontSize: 'large' }} />
          )
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default FloatBtn;
