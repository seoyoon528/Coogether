import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;

  .mainTitle {
    font-family: 'GmarketSans Bold';
    position: absolute;
    left: 10%;
    top: 20%;
  }

  .subTitle {
    font-family: 'GmarketSans Bold';
    position: absolute;
    left: 10%;
    top: 35%;
  }

  & p {
    font-family: 'GmarketSans Light';
    position: absolute;
    left: 10%;
    top: 55%;
  }
  & img {
    width: 100%;
    height: 36vh;
  }
`;
