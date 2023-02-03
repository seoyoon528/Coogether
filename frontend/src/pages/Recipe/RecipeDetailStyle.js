import styled from 'styled-components';

export const RecipeDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10.8rem;

  .recipe-detail {
    width: 78vw;

    background-color: #fff8ea;
    border-radius: 60px;

    padding: 6.4rem;
  }

  .information__name {
    margin-bottom: 5.6rem;
  }

  .information__item > p {
    margin-top: 1.6rem;
    text-align: center;

    font-family: 'Pretendard Bold';
    font-size: 2rem;
  }

  .information__item__category {
    text-align: center;
  }

  .information__item__category img {
    width: 100%;

    margin-bottom: 0.8rem;
  }

  .information__item__category p {
    font-size: 1.6rem;
    color: #505050;
  }

  .information__image img {
    width: 100%;
    max-height: 100%;
  }
`;
