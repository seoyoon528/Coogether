import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

function Signin() {
  // 백엔드에 post요청 추후 추가
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

  const theme = useTheme();
  return (
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
    </div>
  );
}

export default Signin;
