import React from 'react';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';

// 플로팅
const actions = [
  { icon: <VideoCameraFrontOutlinedIcon />, name: 'Video' },
  { icon: <MenuBookTwoToneIcon />, name: 'Recipe' },
];
function FloatBtn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 100,
          // '.MuiButtonBase-root': { backgroundColor: '#FEBD2F' },
          '.MuiFab-root': { backgroundColor: '#FEBD2F' },
          '.MuiFab-sizeLarge': {
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
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default FloatBtn;
