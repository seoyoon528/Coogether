import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;

  .mainTitle {
    font-family: 'Pretendard SemiBold';
    position: absolute;
    left: 10%;
    top: 20%;
  }

  .subTitle {
    font-family: 'Pretendard SemiBold';
    position: absolute;
    left: 10%;
    top: 35%;
  }

  & p {
    font-family: 'Pretendard Regular';
    position: absolute;
    left: 10%;
    top: 55%;
  }
  & img {
    width: 100%;
    height: 36vh;
  }
`;
