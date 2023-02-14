import React from 'react';

// MUI
import { Box, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

// Component
import NextBtn from '../../Btn/NextBtn/NextBtn';

export default function RecipeOrders(props) {
  // Props
  const { recipeOrders, onClick: setRecipeOrders } = props;

  // function
  // 순서 추가
  const addRecipeOrder = () => {
    setRecipeOrders(prev => {
      return [
        ...prev,
        { id: `order-${prev.length !== 0 ? prev[prev.length - 1].id + 1 : 1}` },
      ];
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

  // 순서 삭제
  const deleteOrderInput = idx => {
    setRecipeOrders(prev => {
      const orders = prev;
      orders.splice(idx, 1);
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
                  name="recipeStepRequest"
                  className="recipe-order__input"
                  placeholder={`Step ${idx + 1}`}
                />
              </Box>
              <Box
                gridColumn="span 1"
                sx={{ pb: 2 }}
                className="recipe-cook-button__delete"
              >
                <IconButton
                  onClick={() => {
                    deleteOrderInput(idx);
                  }}
                >
                  <CancelPresentationIcon
                    fontSize="large"
                    sx={{ color: '#ffcc5e' }}
                  />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box gridColumn="span 2" />
      <Box
        gridColumn="span 9"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <NextBtn
          name="추가"
          size="small"
          color="yellow"
          onClick={addRecipeOrder}
        />
      </Box>
    </Box>
  );
}
