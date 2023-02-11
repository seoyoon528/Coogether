import React from 'react';

// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

// Component
import MyRecipe from './MyRecipe';

// Style
import MyHistoyItem from './MyHistoyItem';

export default function ProfileSwiper(props) {
  // Props
  const { histories: cookHistories, recipes } = props;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={48}
      breakpoints={{
        1536: {
          slidesPerView: 4,
        },
      }}
      slidesPerView={3}
      navigation
      // onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {cookHistories &&
        cookHistories.length > 0 &&
        cookHistories.map(
          ({
            historyId,
            historyImg,
            cookingRoom: {
              userJoinLists,
              cookingRoomName,
              cookingRoomStartTime,
              recipe,
            },
          }) => {
            return (
              <SwiperSlide key={historyId}>
                <MyHistoyItem
                  historyImg={historyImg}
                  userJoinLists={userJoinLists}
                  cookingRoomName={cookingRoomName}
                  cookingRoomStartTime={cookingRoomStartTime}
                  recipe={recipe}
                />
              </SwiperSlide>
            );
          }
        )}
      {recipes &&
        recipes.map(recipe => {
          return (
            <SwiperSlide key={recipe.recipeId}>
              <MyRecipe recipe={recipe} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
