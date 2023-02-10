import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import NextBtn from '../../Btn/NextBtn/NextBtn';

export default function CookEnterModalFooter(props) {
  const { setIsCookRoomEnterModalOpened, cookingRoomId } = props;
  const history = useHistory();

  const cookRoomEnterHandler = async () => {
    const enter = await axios({
      // url : `http://i8b206.p.ssafy.io:9000/room/1/1`
      url: `http://i8b206.p.ssafy.io:9000/room/${cookingRoomId}/1`,
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
