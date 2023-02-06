import styled from 'styled-components';

export const Button = styled.div`
  button {
    border-radius: 4px;
    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
    color: black;
  }

  .small {
    width: 64px;
    height: 32px;
  }

  .medium {
    width: 80px;
    height: 40px;
  }

  .large {
    width: 104px;
    height: 40px;
  }

  .yellow {
    background-color: #ffdb8d;
  }

  .yellow:hover {
    background-color: #febd2f;
  }

  .gray {
    background-color: #dee2e6;
  }

  .gray:hover {
    background-color: #adb5bd;
    color: white;
  }
`;
