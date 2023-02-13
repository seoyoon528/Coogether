import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme, StyledEngineProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as R from './ReportModalStyle';

function ReportModal({ userInfo, subscribers, isReport }) {
  console.log(subscribers);
  // 쿡룸에서 props로 가져오는 거로 바꾸기
  const params = useLocation();
  const { accessToken } = userInfo;

  console.log(userInfo);
  const history = useHistory();

  const [userImg, setUserImg] = useState('');

  const inputRef = useRef(null);
  const [willDel, setWillDel] = useState('');
  const [delSort, SetDelSort] = useState('HARMFUL');
  const [delInfo, setDelInfo] = useState('');
  const reportCategory = [
    ['유해한 게시물', 'HARMFUL'],
    ['비방 • 욕설', 'DISGUST'],
    ['음란물 유포', 'PORN'],
    ['부적절한 광고', 'AD'],
    ['기타', 'ETC'],
  ];

  const submitRegister = async () => {
    // 히스토리 생성
    console.log(
      `https://i8b206.p.ssafy.io:9000/api/report/${userInfo.userSeq}/${willDel}`
    );
    const historyRequestInfo = await axios.post(
      `https://i8b206.p.ssafy.io:9000/api/report/${userInfo.userSeq}/${willDel}`,
      {
        reportCategory: delSort,
        reportContent: delInfo,
      },
      { Authorization: `Bearer ${accessToken}` }
    );
    try {
      const submitUserHis = historyRequestInfo;
      console.log(userInfo.userSeq, willDel, submitUserHis, delSort, delInfo);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <R.FormBox>
      <R.ReportTitle>유저를 신고하시겠습니까?</R.ReportTitle>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="select-label" style={{ fontSize: '1.5vh' }}>
          신고할 유저
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={willDel}
          label="신고할 유저"
          onChange={e => {
            setWillDel(e.target.value);
          }}
        >
          {subscribers.map((v, a) => {
            return <MenuItem value={v.userSeq}>{v.nickname}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="select-label" style={{ fontSize: '1.5vh' }}>
          신고 유형
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={delSort}
          label="신고할 유저"
          onChange={e => {
            SetDelSort(e.target.value);
          }}
        >
          {reportCategory.map((v, a) => {
            return <MenuItem value={v[1]}>{v[0]}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
      <input
        label="신고할 유저"
        onChange={e => {
          setDelInfo(e.target.value);
        }}
      />
      <button
        onClick={isReport}
        style={{ background: ' #ABABAB', borderRadius: '3px', color: 'white' }}
      >
        취소
      </button>
      <button
        onClick={submitRegister}
        style={{ background: '#FEBD2F', borderRadius: '3px' }}
      >
        확인
      </button>
    </R.FormBox>
  );
}

export default ReportModal;
