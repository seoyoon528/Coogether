import React from 'react';

import { useHistory } from 'react-router-dom';

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
import { HistoryStyle } from './ProfileSwiperStyle';
import SwiperSlideImage from './SwiperSlideImage';

export default function ProfileSwiper(props) {
  // Props
  const { histories: cookHistories, recipes } = props;

  // useHistory
  const history = useHistory();

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
              recipe: { recipeName },
            },
          }) => {
            return (
              <SwiperSlide key={historyId}>
                <HistoryStyle>
                  <SwiperSlideImage
                    historyImg={historyImg}
                    recipeName={recipeName}
                  />
                  <div className="history__text">
                    <div>
                      <h4 className="history__title">{cookingRoomName}</h4>
                      <div className="history__content">
                        <p className="cook">
                          {userJoinLists.map(({ userSeq, userNickname }) => {
                            return (
                              <span
                                key={userSeq}
                                onClick={() => {
                                  history.push(`/profile/${userSeq}`);
                                }}
                                aria-hidden
                              >
                                {userNickname}
                              </span>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="date">{cookingRoomStartTime}</p>
                  </div>
                </HistoryStyle>
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
