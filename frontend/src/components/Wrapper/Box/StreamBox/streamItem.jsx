import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Component
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

// Style
import * as S from './streamItemStyle';

// Image
import ChefDeco from '../../../../assets/img/chef-deco.png';

function StreamItem({ room }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };
  const history = useHistory();
  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);
  const userSeq = useSelector(state => {
    return state.user.userSeq;
  });
  const {
    cookingRoomId,
    cookingRoomImg,
    cookingRoomName,
    cookingRoomStartTime,
    cookingRoomHost,
    userJoinLists,
    recipe,
  } = room;
  const StartTime = new Date(cookingRoomStartTime);
  let hour = StartTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = StartTime.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  const START = `${hour}:${minute}`;
  return (
    <S.CookRoomItemWrapper>
      <S.CookRoomItemImg
        src={cookingRoomImg}
        alt="img"
        onClick={() => {
          if (userSeq) {
            setIsCookRoomEnterModalOpened(true);
          } else {
            history.push('/login');
          }
        }}
      />
      <S.StartUserWrapper
        onClick={() => {
          if (userSeq) {
            setIsCookRoomEnterModalOpened(true);
          } else {
            history.push('/login');
          }
        }}
      >
        <S.JoinUserWrapper>
          <p>요리사 {userJoinLists ? userJoinLists.length : 0}명</p>
        </S.JoinUserWrapper>
        <S.StartTimeWrapper>
          <p>{START}시작</p>
        </S.StartTimeWrapper>
      </S.StartUserWrapper>
      <S.roomTitle
        onClick={() => {
          if (userSeq) {
            setIsCookRoomEnterModalOpened(true);
          } else {
            history.push('/login');
          }
        }}
      >
        {cookingRoomName}
      </S.roomTitle>
      <S.KingWrapper>
        <img src={ChefDeco} alt="" className="chefhat" />
        <p>{cookingRoomHost}</p>
      </S.KingWrapper>
      <S.TagWrapper>
        <div onClick={openModal} aria-hidden>
          #{recipe.recipeName}
        </div>
        <RecipeDetail
          open={isModalOpened}
          onClose={closeModal}
          recipe={recipe}
        />
      </S.TagWrapper>
      <CookRoomEnterModal
        isCookRoomEnterModalOpened={isCookRoomEnterModalOpened}
        setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
        cookingRoomId={cookingRoomId}
        recipe={recipe}
      />
    </S.CookRoomItemWrapper>
  );
}

export default StreamItem;
