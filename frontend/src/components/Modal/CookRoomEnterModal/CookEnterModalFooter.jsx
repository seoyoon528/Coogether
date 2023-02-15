import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

// Component
import NextBtn from '../../Btn/NextBtn/NextBtn';

export default function CookEnterModalFooter(props) {
  // Props
  const { setIsCookRoomEnterModalOpened, cookingRoomId } = props;

  // Redux
  const userSeq = useSelector(state => state.user.userSeq);
  const accessToken = useSelector(state => state.user.accessToken);

  // useHistory
  const history = useHistory();

  // function
  const cookRoomEnterHandler = async () => {
    try {
      await axios({
        method: 'POST',
        url: `https://i8b206.p.ssafy.io:9000/api/room/${cookingRoomId}/${userSeq}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      history.push(`/Room/${cookingRoomId}`);
    } catch (error) {
      console.log(error);
    }
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
