import styled from 'styled-components';

export const ProfileSwiperStyle = styled.div`
  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
  }
`;

export const HistoryStyle = styled.div`
  width: 100%;

  border: 0.5px dashed #505050;
  border-radius: 4px;

  .history__image {
    height: 30vh;
    cursor: pointer;
  }

  .history__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .history__text {
    min-height: 24vh;
    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .history__title {
    margin-bottom: 1.6rem;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cook {
    line-height: 150%;
    cursor: pointer;
  }

  .cook span {
    font-size: 1.6rem;
    padding-right: 0.8rem;
  }

  .cook span:hover {
    text-decoration: underline #febd2f;
  }

  .data {
    font-size: 1.4rem;
    color: #505050;
  }
`;

export const MyRecipeStyle = styled.div`
  width: 100%;

  border: 0.5px dashed #505050;
  border-radius: 4px;

  margin-bottom: 3.2rem;

  .my-recipe__image {
    height: 25vh;

    cursor: pointer;
  }

  .my-recipe__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .my-recipe__content {
    margin: 2.4rem;
  }

  .my-recipe__title {
    text-align: center;
    padding-bottom: 2.4rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    cursor: pointer;
  }

  .content__list {
    display: flex;
    justify-content: space-between;

    height: 80%;
  }

  .content__item {
    text-align: center;
    width: 30%;
  }

  .content__item img {
    max-width: 80%;
  }
  .content__item p {
    font-size: 1.8rem;
  }

  .content__item > p {
    margin-top: 1.6rem;
  }

  .category p {
    margin-top: 0.8rem;

    color: '#505050';
    font-size: 1.4rem;
  }
`;
