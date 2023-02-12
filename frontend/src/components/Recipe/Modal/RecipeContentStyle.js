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

  .information__item {
    position: relative;
  }

  .information__item > p {
    margin-top: 1.6rem;
    text-align: center;

    font-family: 'Pretendard Bold';
    font-size: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #recipe-author-nickname:hover {
    position: absolute;
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

  // Ingredients
  .ingredients__item {
    display: flex;
    justify-content: space-between;

    margin-top: 1.6rem;
    padding-bottom: 0.8rem;
  }

  .ingredients__item p {
    font-size: 2rem;
  }

  .ingredients__item .amount {
    color: #505050;
    opacity: 80%;
  }

  // Orders
  .orders__item {
    margin-top: 1.6rem;
    padding-bottom: 0.8rem;
  }

  .orders__item.small {
    margin-top: 0.8rem;
  }

  .orders__item.small .content {
    font-size: 1.6rem;
    color: #505050;
  }

  .orders__item .content {
    font-size: 2rem;
  }
`;
