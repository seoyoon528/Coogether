import React from 'react';

// MUI
import { Box, Button, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function RecipeOrders(props) {
  const { recipeOrders, onClick: setRecipeOrders } = props;

  // 순서 추가
  const addRecipeOrder = () => {
    setRecipeOrders(prev => {
      return [prev, { id: `order-${prev[prev.length - 1].id + 1}` }];
    });
  };

  // 순서 내용 입력
  const orderInputHandler = (idx, order) => {
    setRecipeOrders(prev => {
      const orders = prev;
      orders[idx].content = order;
      return [...orders];
    });
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 2">
        <label>요리 순서</label>
      </Box>
      <Box gridColumn="span 10">
        {recipeOrders.map((order, idx) => {
          return (
            <Box
              display="grid"
              gridTemplateColumns="repeat(10, 1fr)"
              gap={2}
              key={order.id}
            >
              <Box gridColumn="span 9">
                <textarea
                  onChange={event => {
                    const inputOrder = event.target.value;
                    orderInputHandler(idx, inputOrder);
                  }}
                  id={order.id}
                  className="recipe-order__input"
                  placeholder={`Step ${idx + 1}`}
                />
              </Box>
              <Box
                gridColumn="span 1"
                sx={{ pb: 2 }}
                className="recipe-cook-button__delete"
              >
                <IconButton>
                  <CancelPresentationIcon fontSize="large" color="warning" />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box gridColumn="span 2" />
      <Box gridColumn="span 9" sx={{ mx: 'auto' }}>
        <Button variant="contained" onClick={addRecipeOrder}>
          <p>추가</p>
        </Button>
      </Box>
    </Box>
  );
}
