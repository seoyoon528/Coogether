import React, { useEffect, useState } from 'react';
import axios from 'axios';
// MUI 설정

import { useTheme, StyledEngineProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RedirectPage() {
  // 쿼리스트링을 백엔드에 송신
  const [isRegistered, setIsregisterd] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: '', // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
    name: '', // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
    email: '', // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
    nickname: '',
    profileImg: 'imgUrl',
    userIntroduce: '안녕하세요 000입니다.',
    userCookCategory: '',
  });
  const [nickName, setNickName] = useState('');
  const [prefer, setPrefer] = useState('');
  const preferCookArr = [
    '한식',
    '중식',
    '양식',
    '일식',
    '베이킹/디저트',
    '분식',
    '기타',
  ];
  const nickNameHandler = e => {
    setNickName(e.target.value);
  };
  const preferHandler = e => {
    setPrefer(e.target.value);
  };
  const submitRegister = async () => {
    const userFormPayload = {
      id: '111', // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
      name: '111', // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
      email: '111', // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
      nickname: '111',
      profileImg: 'imgUrl',
      userIntroduce: '안녕하세요 000입니다.',
      userCookCategory: 'KOREAN',
    };
    const submitUserForm = await axios.post(
      'http://localhost:9000/signup',
      userFormPayload
    );
    console.log(submitUserForm);
  };
  const theme = useTheme();

  const checkRegister = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const res = await axios.get(
      `http://localhost:9000/user/login?code=${code}`
    );
    console.log(res);
    // loginsuccess false이면
    if (!res.data.loginSuccess) {
      setIsregisterd(false);
      setUserInfo(res);
      // 이미 회원인 경우 추후수정
    } else {
      console.log(`회원가입 된 사람입니다`);
      console.log(res);
    }
  };

  useEffect(() => {
    checkRegister();
  }, []);
  return (
    <>
      {!isRegistered ? (
        <div>
          <div>
            <input onChange={nickNameHandler} />
          </div>
          <StyledEngineProvider injectFirst>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="select-label">선호 메뉴</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={prefer}
                label="선호 메뉴"
                onChange={preferHandler}
                MenuProps={MenuProps}
              >
                {preferCookArr.map((v, a) => {
                  return (
                    <MenuItem value={v} style={getStyles(v, prefer, theme)}>
                      {v}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </StyledEngineProvider>
          <div>{nickName}</div>
          <div>{prefer}</div>

          <button onClick={submitRegister}>회원가입</button>
        </div>
      ) : (
        '리다이렉트 페이지입니다.'
      )}
    </>
  );
}
export default RedirectPage;
