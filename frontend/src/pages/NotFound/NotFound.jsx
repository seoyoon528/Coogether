import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './NotFoundStyle';

import egg from '../../assets/img/egg-unscreen.gif';
import fire from '../../assets/img/fire-unscreen.gif';
import meat from '../../assets/img/meat-unscreen.gif';
import mainlogo from '../../assets/img/mainlogo.png';

function NotFound() {
  const history = useHistory();

  const backHandler = () => {
    history.push('/Main');
  };
  return (
    <S.all>
      <h1 className="first">4</h1>
      <img className="food" src={meat} alt="" />
      <h1 className="second">4</h1>
      <h1>원하시는 결과를 찾을 수 없어요</h1>
      <button onClick={backHandler}>
        <img className="logo" src={mainlogo} alt="" />
      </button>
    </S.all>
  );
}

export default NotFound;
