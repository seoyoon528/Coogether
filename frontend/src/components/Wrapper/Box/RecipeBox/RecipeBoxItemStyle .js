import styled from 'styled-components';

export const RecipeBoxItemStyle = styled.div`
  margin-top: 25px;
  /* width: 27.2rem; */
  height: 21rem;
  background-color: #fff8ea;

  & img {
    height: 15rem;
    width: 100%;
  }

  & h4 {
    text-align: center;
    line-height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const UnderLine = styled.hr`
  width: 60%;
  border: 0.1rem solid #febd2f;
`;
