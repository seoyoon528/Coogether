import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './NotFoundStyle';

import egg from '../../assets/img/egg-unscreen.gif';
import sublogo from '../../assets/img/sublogo.png';

function NotFound(props) {
  const { onChangeShow } = props;
  useEffect(() => {
    onChangeShow();
  }, []);
  const history = useHistory();

  const backHandler = () => {
    history.push('/Main');
    onChangeShow();
  };

  return (
    <S.Window>
      <S.All>
        <button onClick={backHandler}>
          <img className="logo" src={sublogo} alt="" />
        </button>
        <S.Header>
          <h1 className="first">4</h1>
          <img className="food" src={egg} alt="" />
          <h1 className="second">4</h1>
        </S.Header>
        <h1 className="title">원하시는 결과를 찾을 수 없어요</h1>
      </S.All>
    </S.Window>
  );
}

export default NotFound;
