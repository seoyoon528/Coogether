import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  height: 64px;

  & input {
    border-radius: 1rem;
    height: 6.5rem;
    width: 50rem;
    background-color: #ffffff;
    border: 0.2rem solid rgba(254, 189, 47, 0.5);
    font-size: 1.8rem;
    line-height: auto;
    color: #4f4f4f;
  }
`;
