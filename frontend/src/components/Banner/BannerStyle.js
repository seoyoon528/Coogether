import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;

  & img {
    width: 100%;
    height: 36vh;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    left: 10%;
    top: 20%;
  }
  @media (max-width: 1024px) {
    left: 3%;
    top: 20%;
  }

  .mainTitle {
    font-family: 'GmarketSans Bold';
  }

  .subTitle {
    font-family: 'GmarketSans Bold';
  }

  & p {
    font-family: 'GmarketSans Light';
  }
`;
