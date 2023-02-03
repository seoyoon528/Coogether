import styled from 'styled-components';

export const smallCameraContainer = styled.div`
  height: 200px;
  width: 243px;
  //비디오로 변경할 것
  & div {
    border-radius: 0.4rem;
    height: 182px;
    width: 240px;
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
