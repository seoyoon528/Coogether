import styled from 'styled-components';

export const BigCameraContainer = styled.div`
  height: 415px;
  width: 496px;
  //비디오로 변경할 것
  & div {
    border-radius: 0.4rem;
    height: 391px;
    width: 496px;
    border: ${props => (props.isKing ? '0.2rem solid #febd2f' : '')};
    /* border: 0.2rem solid #febd2f; */
    // 테스트용 입니다
    background-color: aqua;
  }
  & p {
    text-align: right;
    vertical-align: top;
    line-height: auto;
  }
`;
