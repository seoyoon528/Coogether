import React from 'react';

import { Stack } from '@mui/material';

export default function RecipeOrders(props) {
  const { orders } = props;

  return (
    <Stack direction="column" spacing={2}>
      <h2>레시피</h2>
      <ul>
        {orders.map((order, idx) => {
          return (
            <li
              className={`orders__item ${
                order.trim()[0] === '*' ? 'small' : ''
              }`}
              key={`orders-${idx + 1}`}
            >
              <p className="content">{order}</p>
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
