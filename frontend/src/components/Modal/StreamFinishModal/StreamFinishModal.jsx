import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as SF from './StreamFinishModalStyle';
import UploadImg from './UploadImg';

function StreamFinishModal({ onChangeShow }) {
  const params = useLocation();
  const accessToken = useSelector(state => state.user.accessToken);
  const userInfo = useSelector(state => state.user);
  const history = useHistory();
  const [nowStep, setNowStep] = useState(0);
  const [userImg, setUserImg] = useState('');
  const [myIng, setMyIng] = useState([]);
  const [willDel, setWillDel] = useState([]);
  const [errInfo, setErrorInfo] = useState('');

  // 삭제할 재료 control
  const delHandler = target => {
    const newArr = willDel.slice();
    if (newArr.indexOf(target) !== -1) {
      newArr.splice(willDel.indexOf(target), 1);
      setWillDel(newArr);
    } else {
      setWillDel([...willDel, target]);
    }
  };

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
      setErrorInfo(err);
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
      setErrorInfo(err);
    }
  };
  return (
    <>
      {nowStep === 0 ? (
        <SF.FinishWrap>
          <SF.FinishTitle>완성된 요리 사진을 올려 주세요!</SF.FinishTitle>
          <SF.SubTitle>등록한 사진은 히스토리에 저장됩니다</SF.SubTitle>

          <UploadImg userImgHandler={userImgHandler} />

          <SF.NextBeforWrap>
            <SF.NexBeBten style={{ opacity: '0', cursor: 'default' }}>
              이전
            </SF.NexBeBten>
            <SF.NexBeBten
              onClick={() => {
                setNowStep(1);
              }}
            >
              다음
            </SF.NexBeBten>
          </SF.NextBeforWrap>
        </SF.FinishWrap>
      ) : (
        <SF.FinishWrap>
          <SF.FinishTitle>요리는 즐거우셨나요?</SF.FinishTitle>
          <SF.SubTitle>
            이번 요리로 소진한 재료는 냉장고에서 제거하세요.
          </SF.SubTitle>
          <SF.CheckBox>
            <FormGroup>
              {myIng.map((v, i) => {
                return (
                  <FormControlLabel
                    onChange={() => {
                      delHandler(v[1]);
                    }}
                    control={<Checkbox />}
                    label={v[0]}
                  />
                );
              })}
            </FormGroup>
          </SF.CheckBox>
          <SF.ImgUploadBtn style={{ opacity: '0', cursor: 'default' }}>
            사진 촬영
          </SF.ImgUploadBtn>
          <SF.NextBeforWrap>
            <SF.NexBeBten
              style={{ background: '#DEE2E6' }}
              onClick={() => {
                setNowStep(0);
              }}
            >
              이전
            </SF.NexBeBten>
            <SF.NexBeBten
              onClick={() => {
                submitRegister();
                onChangeShow();

                history.push('/Main');
              }}
            >
              제거
            </SF.NexBeBten>
          </SF.NextBeforWrap>
        </SF.FinishWrap>
      )}
    </>
  );
}

export default StreamFinishModal;
