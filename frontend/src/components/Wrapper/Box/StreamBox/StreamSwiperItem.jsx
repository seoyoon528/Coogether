import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI
import { Stack } from '@mui/material';

// Component
import CookRoomEnterModal from '../../../Modal/CookRoomEnterModal/CookRoomEnterModal';
import RecipeDetail from '../../../Modal/RecipeModal/RecipeDetail';

// Image
import ChefDeco from '../../../../assets/img/chef-deco.png';

// Style
import * as S from './StreamSwiperStyle';

function StreamSwiperItem(props) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };
  const { room } = props;
  const history = useHistory();

  const [isCookRoomEnterModalOpened, setIsCookRoomEnterModalOpened] =
    useState(false);

  const userSeq = useSelector(state => {
    return state.user.userSeq;
  });

  let isDto = false;
  if (room.cookingRoomDto) {
    isDto = true;
  }
  let hour;
  let minute;
  if (isDto) {
    const startTime = new Date(room.cookingRoomDto.cookingRoomStartTime);
    hour = startTime.getHours();
    minute = startTime.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
  } else {
    const startTime = new Date(room.cookingRoomStartTime);
    hour = startTime.getHours();
    minute = startTime.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
  }
  const START = `${hour}:${minute}`;

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <S.CookRoomItemWrapper>
          <S.CookRoomItemImg
            src={
              isDto ? room.cookingRoomDto.cookingRoomImg : room.cookingRoomImg
            }
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
              {isDto ? (
                <p>
                  요리사{' '}
                  {room.cookingRoomDto.userJoinLists
                    ? room.cookingRoomDto.userJoinLists.length
                    : 0}
                  명
                </p>
              ) : (
                <p>
                  요리사 {room.userJoinLists ? room.userJoinLists.length : 0}명
                </p>
              )}
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
            {isDto ? room.cookingRoomDto.cookingRoomName : room.cookingRoomName}
          </S.roomTitle>
          <S.KingWrapper>
            <img src={ChefDeco} alt="" className="chefhat" />
            <p>
              {isDto
                ? room.cookingRoomDto.cookingRoomHost
                : room.cookingRoomHost}
            </p>
          </S.KingWrapper>
          <S.TagWrapper>
            <div onClick={openModal} aria-hidden>
              #
              {isDto
                ? room.cookingRoomDto.recipe.recipeName
                : room.recipe.recipeName}
            </div>
            <RecipeDetail
              open={isModalOpened}
              onClose={closeModal}
              recipe={isDto ? room.cookingRoomDto.recipe : room.recipe}
            />
          </S.TagWrapper>
          <CookRoomEnterModal
            isCookRoomEnterModalOpened={isCookRoomEnterModalOpened}
            setIsCookRoomEnterModalOpened={setIsCookRoomEnterModalOpened}
            cookingRoomId={
              isDto ? room.cookingRoomDto.cookingRoomId : room.cookingRoomId
            }
            recipe={isDto ? room.cookingRoomDto.recipe : room.recipe}
          />
        </S.CookRoomItemWrapper>
      </Stack>
    </>
  );
}

export default StreamSwiperItem;
