import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  height: auto;
  padding-bottom: 2rem;
`;

export const SearchFormLabel = styled.label`
  position: relative;

  input {
    border-radius: 1rem;
    height: 5rem;
    width: 45rem;
    background-color: #ffffff;
    border: 0.2rem solid rgba(254, 189, 47, 0.5);
    font-size: 1.8rem;
    line-height: auto;
    color: #4f4f4f;
  }
  input::placeholder {
    /* padding-left: 10px; */
    text-align: center;
  }
  button {
    position: absolute;
    top: 1.4rem;
    right: 0.5rem;
  }
`;
