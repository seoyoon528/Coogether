import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import imgInput from '../../../assets/icon/imgInput.svg';
import * as R from './ReportModalStyle';

function ReportModal({ onChangeShow }) {
  const params = useLocation();
  const accessToken = useSelector(state => state.user.accessToken);
  const userInfo = useSelector(state => state.user);
  const history = useHistory();
  const [nowStep, setNowStep] = useState(0);
  const [imgURL, setImgURL] = useState('');
  const [userImg, setUserImg] = useState('');
  const [myIng, setMyIng] = useState([]);
  const inputRef = useRef(null);
  const [willDel, setWillDel] = useState([]);

  // 삭제할 재료 control
  const delHandler = target => {
    const newArr = willDel.slice();
    if (newArr.indexOf(target) !== -1) {
      newArr.splice(willDel.indexOf(target), 1);
      setWillDel(newArr);
    } else {
      setWillDel([...willDel, target]);
      console.log(willDel);
    }
  };

  // 전체화면 설정
  function openFullScreenMode() {
    if (document.documentElement.requestFullscreen)
      document.documentElement.requestFullscreen();
    else if (document.documentElement.webkitRequestFullscreen)
      // Chrome, Safari (webkit)
      document.documentElement.webkitRequestFullscreen();
    else if (document.documentElement.mozRequestFullScreen)
      // Firefox
      document.documentElement.mozRequestFullScreen();
    else if (document.documentElement.msRequestFullscreen)
      // IE or Edge
      document.documentElement.msRequestFullscreen();
  }

  // 전체화면 해제
  function closeFullScreenMode() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen)
      // Chrome, Safari (webkit)
      document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen)
      // Firefox
      document.mozCancelFullScreen();
    else if (document.msExitFullscreen)
      // IE or Edge
      document.msExitFullscreen();
  }

  const userImgHandler = event => {
    setUserImg(event);
  };

  // 재료 삭제를 위한 현재 소유한 재료 조회
  const resIng = async () => {
    const res = await axios.get(
      `https://i8b206.p.ssafy.io:9000/api/room/${
        params.pathname.split('/')[params.pathname.split('/').length - 1]
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const { recipeId } = res.data.recipe;
    const myIng = await axios.get(
      `https://i8b206.p.ssafy.io:9000/api/myIngredient/list/cooking/${userInfo.userSeq}/${recipeId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(myIng.data.map((v, i) => v.ingredient.ingredientName));
    setMyIng(
      myIng.data.map((v, i) => [
        v.ingredient.ingredientName,
        v.ingredient.ingredientId,
      ])
    );
  };
  useEffect(() => {
    resIng();
  }, []);
  // 히스토리 생성
  // 재료 제거
  // 방 삭제

  const submitRegister = async () => {
    const formData = new FormData();
    formData.append('file', userImg);
    // 히스토리 생성
    const historyRequestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/history/create/${
        userInfo.userSeq
      }/${params.pathname.split('/')[params.pathname.split('/').length - 1]}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };
    try {
      const submitUserHis = await axios(historyRequestInfo);
      const isSignal = submitUserHis;
    } catch (err) {
      console.log(err);
    }
    // 재료 제거
    const deleteIngredientList = willDel.join();

    const IngDelRequestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/myIngredient/delete/${userInfo.userSeq}/${deleteIngredientList}`,
      method: 'PATCH',
      data: {},
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      const IngDelForm = await axios(IngDelRequestInfo);
      const isSignaled = IngDelForm;

      history.push('/main');
    } catch (err) {
      console.log(err);
    }
    // 방 삭제
    const DelRoomRequestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/room/${
        params.pathname.split('/')[params.pathname.split('/').length - 1]
      }/${userInfo.userSeq}`,
      Authorization: `Bearer ${accessToken}`,
      method: 'DELETE',
    };
    try {
      const DelRoomForm = await axios(DelRoomRequestInfo);
      const isSignaled = DelRoomForm;

      history.push('/main');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <R.ReportTitle>닉네임을 신고하시겠습니까?</R.ReportTitle>
    </>
  );
}

export default ReportModal;
