import React from 'react';

// MUI
import { Stack, Grid } from '@mui/material';

// IMAGE
import IngredientsImage from '../../../assets/img/cake-dome.svg';
import StepsImage from '../../../assets/img/list.png';
import CopyrightImage from '../../../assets/img/copyright.png';

export default function RecipeInformations(props) {
  const { name, category, author, contentCount, ingredientCount, date } = props;
  return (
    <Stack direction="column" spacing={2}>
      <h2 className="information__name">{name}</h2>
      <ul className="information__list">
        <Grid container columnSpacing={2} columns={12}>
          <Grid item xs={4}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={IngredientsImage} alt="재료 아이콘" />
                <p>재료</p>
              </div>
              <p>{ingredientCount}</p>
            </li>
          </Grid>
          <Grid item xs={4}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={StepsImage} alt="과정 아이콘" />
                <p>과정</p>
              </div>
              <p>{contentCount}</p>
            </li>
          </Grid>
          <Grid item xs={4}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={CopyrightImage} alt="출처 아이콘" />
                <p>출처</p>
              </div>
              <p>{author}</p>
            </li>
          </Grid>
        </Grid>
      </ul>
    </Stack>
  );
}
