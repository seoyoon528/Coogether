import React from 'react';

import { useHistory } from 'react-router-dom';

import * as R from './ConfirmModalStyle';

function ConfirmModal({ info, onChangeShow, isReport, killPopup }) {
  const history = useHistory();

  return (
    <R.FormBox>
      <R.ReportTitle>{info}</R.ReportTitle>
      {info[info.length - 5] === '광' ? (
        <R.ReportSub>로그인 후 다양한 요리를 경험해 보세요</R.ReportSub>
      ) : (
        ''
      )}

      <R.ReportBtn
        onClick={() => {
          if (info === '신고가 정상적으로 접수되었습니다') {
            isReport(false);
          } else if (info[info.length - 4] === '냈') {
            killPopup();
          } else if (info[info.length - 5] === '광') {
            onChangeShow();
            history.push('/Login');
          }
        }}
        style={{ background: '#FEBD2F' }}
      >
        {info === '신고가 정상적으로 접수되었습니다'
          ? '나가기'
          : info[info.length - 4] === '냈'
          ? '확인'
          : '확인'}
      </R.ReportBtn>
    </R.FormBox>
  );
}

export default ConfirmModal;
