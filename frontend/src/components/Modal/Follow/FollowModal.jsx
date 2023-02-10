import React from 'react';

// MUI
import { Dialog } from '@mui/material';

export default function FollowModal(props) {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      FollowModal
    </Dialog>
  );
}
