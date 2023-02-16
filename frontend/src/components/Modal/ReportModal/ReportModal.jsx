import React, { useState } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as R from './ReportModalStyle';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

function ReportModal({ userInfo, subscribers, isReport }) {
  const [isModalOpen, setisModalOpen] = useState('');
  // 쿡룸에서 props로 가져오는 거로 바꾸기
  const { accessToken } = userInfo;

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
      setisModalOpen('신고가 정상적으로 접수되었습니다');
      console.log(userInfo.userSeq, willDel, submitUserHis, delSort, delInfo);
    } catch (err) {
      setisModalOpen('오류가 발생했습니다. 다시 작성해 주세요');
    }
  };
  return (
    <>
      {isModalOpen.length !== 0 && (
        <div>
          <Modal
            open={isModalOpen.length !== 0}
            onClose={() => setisModalOpen('')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50%',
                height: '60%',
                bgcolor: '#FFFFFF',
                border: '2px solid #ffffff',
                boxShadow: 24,
                borderRadius: '16px',
                p: 4,
              }}
            >
              <ConfirmModal info={isModalOpen} isReport={isReport} />
            </Box>
          </Modal>
        </div>
      )}
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
        <FormControl sx={{ m: 1, width: 300 }}>
          <R.ReportWrite>
            <TextField
              id="outlined-multiline-static"
              label="신고 내용"
              multiline
              rows={4}
              style={{ width: '100%' }}
              onChange={e => {
                setDelInfo(e.target.value);
              }}
            />
          </R.ReportWrite>
        </FormControl>
        <R.ReportBtnWrap>
          <R.ReportBtn
            onClick={isReport}
            style={{
              background: ' #ABABAB',

              color: 'white',
            }}
          >
            취소
          </R.ReportBtn>
          <R.ReportBtn
            onClick={submitRegister}
            style={{ background: '#FEBD2F' }}
          >
            확인
          </R.ReportBtn>
        </R.ReportBtnWrap>
      </R.FormBox>
    </>
  );
}

export default ReportModal;
