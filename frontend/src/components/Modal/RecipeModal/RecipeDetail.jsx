import React from 'react';

// MUI
import { Dialog } from '@mui/material';

// Component
import RecipeContent from '../../Recipe/Modal/RecipeContent';

export default function RecipeDetail(props) {
  // Props
  const { open, onClose, recipe } = props;

  console.log(recipe);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <RecipeContent onClose={onClose} recipe={recipe} />
    </Dialog>
  );
}
