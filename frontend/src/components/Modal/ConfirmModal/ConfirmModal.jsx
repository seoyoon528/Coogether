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
import * as R from './ConfirmModalStyle';

function ConfirmModal({ info, onChangeShow, navShow, isReport, killPopup }) {
  const params = useLocation();

  const history = useHistory();

  return (
    <R.FormBox>
      <R.ReportTitle>{info}</R.ReportTitle>

      <R.ReportBtn
        onClick={() => {
          if (info === '신고가 정상적으로 접수되었습니다') {
            isReport(false);
          } else if (info[info.length - 4] === '냈') {
            killPopup();
          } else if (!navShow) {
            onChangeShow();
            history.push('/main');
          }
        }}
        style={{ background: '#FEBD2F' }}
      >
        {info === '신고가 정상적으로 접수되었습니다'
          ? '나가기'
          : info[info.length - 4] === '냈'
          ? '확인'
          : '홈으로 가기'}
      </R.ReportBtn>
    </R.FormBox>
  );
}

export default ConfirmModal;
