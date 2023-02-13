import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI
import { Stack, Grid } from '@mui/material';

// IMAGE
import IngredientsImage from '../../../assets/img/handbag.png';
import StepsImage from '../../../assets/img/list.png';
import CategoryImage from '../../../assets/img/cake-dome.svg';

export default function RecipeInformations(props) {
  // Props
  const { name, category, contentCount, ingredientCount, nickname, userSeq } =
    props;

  // useHistory
  const history = useHistory();

  // Redux
  const koreanCategory = useSelector(state => state.prefer);

  return (
    <Stack direction="column" spacing={2}>
      <div className="information__name">
        <h2 className="recipe">{name}</h2>
        <p
          className="author"
          onClick={() => {
            history.push(`/profile/${userSeq}`);
          }}
          aria-hidden
        >
          {nickname}
        </p>
      </div>
      <ul className="information__list">
        <Grid
          container
          columnSpacing={2}
          columns={12}
          justifyContent="space-around"
        >
          <Grid item xs={3}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={IngredientsImage} alt="재료 아이콘" />
                <p>재료</p>
              </div>
              <p>{ingredientCount}개</p>
            </li>
          </Grid>
          <Grid item xs={3}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={StepsImage} alt="과정 아이콘" />
                <p>과정</p>
              </div>
              <p>{contentCount}개</p>
            </li>
          </Grid>
          <Grid item xs={3}>
            <li className="information__item">
              <div className="information__item__category">
                <img src={CategoryImage} alt="분야 아이콘" />
                <p>분야</p>
              </div>
              <p>
                {koreanCategory[category] === '베이킹/디저트'
                  ? '디저트'
                  : koreanCategory[category]}
              </p>
            </li>
          </Grid>
        </Grid>
      </ul>
    </Stack>
  );
}
