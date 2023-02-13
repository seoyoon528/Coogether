import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;

  /* .mainTitle {
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
  } */
  & img {
    width: 100%;
    height: 36vh;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* left: 30%;
  top: 30%; */
  /* @media (max-width: 600px) {
    left: 10%;
    top: 20%;
  } */
  @media (min-width: 800px) {
    left: 10%;
    top: 20%;
  }
  @media (max-width: 1024px) {
    left: 3%;
    top: 20%;
  }

  .mainTitle {
    /* display: flex; */
    font-family: 'GmarketSans Bold';
    /* position: absolute;
    left: 10%;
    top: 20%; */
  }

  .subTitle {
    font-family: 'GmarketSans Bold';
    /* position: absolute;
    left: 10%;
    top: 35%; */
  }

  & p {
    font-family: 'GmarketSans Light';
    /* position: absolute;
    left: 10%;
    top: 55%; */
  }
`;
