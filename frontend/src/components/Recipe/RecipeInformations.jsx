import React from 'react';

import { Stack } from '@mui/material';

export default function RecipeInformations(props) {
  const {
    name,
    category,
    author,
    orderCount,
    contentCount,
    ingredientCount,
    date,
  } = props;
  return (
    <Stack direction="column" spacing={2}>
      <h2 className="information__name">{name}</h2>
      <ul className="information__list">
        <li className="information__item">
          <div className="information__item__category">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png"
              alt="재료 아이콘"
            />
            <p>재료</p>
          </div>
          <p>{ingredientCount}</p>
        </li>

        <li className="information__item">
          <div className="information__item__category">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3078/3078984.png"
              alt="과정 아이콘"
            />
            <p>과정</p>
          </div>
          <p>{orderCount}</p>
        </li>

        <li className="information__item">
          <div className="information__item__category">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2088/2088619.png"
              alt="출처 아이콘"
            />
            <p>출처</p>
          </div>
          <p>{author}</p>
        </li>
      </ul>
    </Stack>
  );
}
