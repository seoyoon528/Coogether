import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import NextBtn from '../../Btn/NextBtn/NextBtn';

export default function CookEnterModalFooter(props) {
  const { setIsCookRoomEnterModalOpened, cookingRoomId } = props;
  const userSeq = useSelector(state => state.user.userSeq);
  const accessToken = useSelector(state => state.user.accessToken);
  const history = useHistory();

  const cookRoomEnterHandler = async () => {
    await axios({
      url: `https://i8b206.p.ssafy.io:9000/api/room/${cookingRoomId}/${userSeq}`,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    history.push(`/Room/${cookingRoomId}`);
  };
  return (
    <footer>
      <div className="submit-button">
        <NextBtn
          name="취소"
          color="gray"
          size="medium"
          onClick={() => {
            setIsCookRoomEnterModalOpened(false);
          }}
        />
        <NextBtn
          name="시작"
          color="yellow"
          size="medium"
          onClick={cookRoomEnterHandler}
        />
      </div>
    </footer>
  );
}
