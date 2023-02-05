import styled from 'styled-components';

export const HistoryStyle = styled.div`
  height: 40rem;

  border: 0.5px dashed #505050;
  border-radius: 4px;

  .history__image {
    height: 60%;
  }

  .history__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }
`;

export const MyRecipeStyle = styled.div`
  height: 40rem;

  border: 0.5px dashed #505050;
  border-radius: 4px;

  .my-recipe__image {
    height: 40%;
  }

  .my-recipe__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .my-recipe__text {
    padding: 2.4rem;
  }

  .my-recipe__title {
    text-align: center;
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
