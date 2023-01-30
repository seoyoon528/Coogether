import styled from 'styled-components';

export const RecipeRegisterStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p.center {
    text-align: center;
  }

  .gray-505050 {
    color: #505050;
  }

  label {
    font-size: 1.6rem;
    font-family: 'Pretendard Bold';
  }

  input {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  button {
    border: 1px solid black;
    background-color: yellow;
  }

  input.image-input {
    opacity: 0;
  }
`;
