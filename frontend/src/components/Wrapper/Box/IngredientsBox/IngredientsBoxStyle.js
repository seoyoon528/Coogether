import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 0.8rem;
  margin: 0 auto;
  display: inline-block;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  text-align: center;

  &:hover {
    color: #febd2f;
  }
`;

export const Contents = styled.div`
  height: 616px;
  background: #fff8ea;
  padding: 10px;
  margin-top: 2rem;
  text-align: center;
`;

export const H4 = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
