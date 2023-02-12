import styled from 'styled-components';

export const HistoryStyle = styled.div`
  /* height: 40rem; */

  border: 0.5px dashed #505050;
  border-radius: 4px;

  .history__image {
    height: 55%;
    cursor: pointer;
  }

  .history__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .history__text {
    height: 45%;
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
  /* height: 36rem; */

  border: 0.5px dashed #505050;
  border-radius: 4px;

  margin-bottom: 3.2rem;

  cursor: pointer;

  .my-recipe__image {
    height: 45%;
  }

  .my-recipe__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .my-recipe__text {
    padding: 2.4rem;
    height: 55%;
  }

  .my-recipe__title {
    text-align: center;

    margin-bottom: 2.4rem;
  }

  .content__item {
    text-align: center;
  }

  .content__item img {
    width: 4rem;
    height: 4rem;
  }
  .content__item p {
    font-size: 1.8rem;
  }

  .category {
    margin-bottom: 2.4rem;
  }

  .category p {
    margin-top: 0.8rem;

    color: '#505050';
    font-size: 1.4rem;
  }
`;
