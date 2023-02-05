import React from 'react';

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

export default function ProfileSwiper(props) {
  const { histories, recipes } = props;
  return (
    <Swiper
      modules={[Navigation, Mousewheel]}
      spaceBetween={48}
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
                <h4 className="history__title">{history.title}</h4>
                <div className="history__content">
                  <p className="cook">
                    {history.cooks.map(cook => {
                      return <span key={cook}>{cook}</span>;
                    })}
                  </p>
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
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2940/2940816.png"
                          alt="재료 아이콘"
                        />
                        <p>재료</p>
                      </div>
                      <p>N개</p>
                    </div>
                    <div className="content__item">
                      <div className="category">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3078/3078984.png"
                          alt="단계 아이콘"
                        />
                        <p>과정</p>
                      </div>
                      <p>N개</p>
                    </div>
                    <div className="content__item">
                      <div className="category">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1627/1627309.png"
                          alt="재료 아이콘"
                        />
                        <p>작성일</p>
                      </div>
                      <p>23.01.01</p>
                    </div>
                  </Stack>
                </div>
              </MyRecipeStyle>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
