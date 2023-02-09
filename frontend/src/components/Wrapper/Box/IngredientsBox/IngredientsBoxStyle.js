import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 0.8rem;
  margin: 0 auto;
  display: inline-block;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Categories = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 1.7rem;
  text-align: center;

  &:hover {
    color: #febd2f;
  }
`;

export const Contents = styled.div`
  height: 540px;
  background: #fff8ea;
  padding: 10px;
  /* margin-left: 8rem; */
  margin-top: 2rem;
  text-align: center;
`;

export const H4 = styled.div`
  font-weight: 550;
  font-size: 18px;
`;
