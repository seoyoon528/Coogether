import styled from 'styled-components';

export const RecipeContentStyle = styled.div`
  background-color: #fff8ea;

  padding: 6.4rem;

  .information__name {
    margin-bottom: 5.6rem;
  }

  .information__list {
    display: flex;
    justify-content: space-between;
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

    border-radius: 4px;
  }

  .ingredients__item {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.6rem;
  }

  .ingredients__item p {
    font-size: 2rem;
  }

  .ingredients__item .amount {
    color: #505050;
    opacity: 80%;
  }

  .orders__item {
    margin-bottom: 1.6rem;
  }

  .orders__item .content {
    margin-top: 0.8rem;
  }
`;
