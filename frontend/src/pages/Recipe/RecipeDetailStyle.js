import styled from 'styled-components';

export const RecipeDetailStyle = styled.div`
  ul.top {
    display: flex;
  }

  li {
    margin: 1rem;
  }

  .ingredient {
    display: flex;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  .recipe-detail {
    margin-left: 2.4rem;
    margin-right: 2.4rem;
  }

  .recipe-detail__information {
    display: flex;
    flex-direction: column;
  }
`;
