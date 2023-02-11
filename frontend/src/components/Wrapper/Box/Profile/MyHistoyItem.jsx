import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Component
import SwiperSlideImage from './SwiperSlideImage';

// Style
import { HistoryStyle } from './ProfileSwiperStyle';
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

export default function MyHistoyItem(props) {
  // Props
  const {
    historyImg,
    userJoinLists,
    cookingRoomName,
    recipe,
    cookingRoomStartTime,
  } = props;

  // useHistory
  const history = useHistory();

  // useState
  const [isModalOpened, setIsModalOpened] = useState(false);

  // function
  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <HistoryStyle>
      <RecipeDetail open={isModalOpened} onClose={closeModal} recipe={recipe} />
      <SwiperSlideImage
        historyImg={historyImg}
        recipeName={recipe.recipeName}
        setIsModalOpened={setIsModalOpened}
      />
      <div className="history__text">
        <div>
          <h4
            className="history__title"
            onClick={() => {
              setIsModalOpened(true);
            }}
            aria-hidden
          >
            {cookingRoomName}
          </h4>
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
  );
}
