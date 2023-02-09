import React, { useEffect, useState } from 'react';

// MUI
import { Stack } from '@mui/material';

// Swiper
import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

// Style
import { HistoryStyle, MyRecipeStyle } from './ProfileSwiperStyle';

// Image
import StepCountImage from '../../../../assets/img/list.png';
import IngredientCountImage from '../../../../assets/img/handbag.png';
import CookCategoryImage from '../../../../assets/img/cake-dome.svg';

export default function ProfileSwiper(props) {
  const { histories, recipes } = props;
  return (
    <Swiper
      modules={[Navigation, Mousewheel]}
      spaceBetween={48}
      breakpoints={{
        1536: {
          slidesPerView: 4,
        },
      }}
      slidesPerView={3}
      navigation
      mousewheel
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {histories &&
        histories.map(history => {
          return (
            <SwiperSlide key={history.id}>
              <HistoryStyle>
                <div className="history__image">
                  <img src={history.image} alt="요리 사진" />
                </div>
                <div className="history__text">
                  <div>
                    <h4 className="history__title">{history.title}</h4>
                    <div className="history__content">
                      <p className="cook">
                        {history.cooks.map(cook => {
                          return <span key={cook}>{cook}</span>;
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="date">{history.date}</p>
                </div>
              </HistoryStyle>
            </SwiperSlide>
          );
        })}
      {recipes &&
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.id}>
              <MyRecipeStyle>
                <div className="my-recipe__image">
                  <img src={recipe.image} alt="레시피 사진" />
                </div>
                <Stack spacing={3}>
                  <div className="my-recipe__text">
                    <h4 className="my-recipe__title">{recipe.recipeName}</h4>
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <div className="content__item">
                        <div className="category">
                          <img src={CookCategoryImage} alt="재료 아이콘" />
                          <p>선호</p>
                        </div>
                        <p>한식</p>
                      </div>
                      <div className="content__item">
                        <div className="category">
                          <img src={IngredientCountImage} alt="재료 아이콘" />
                          <p>재료</p>
                        </div>
                        <p>N개</p>
                      </div>
                      <div className="content__item">
                        <div className="category">
                          <img src={StepCountImage} alt="단계 아이콘" />
                          <p>과정</p>
                        </div>
                        <p>N개</p>
                      </div>
                    </Stack>
                  </div>
                </Stack>
              </MyRecipeStyle>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
