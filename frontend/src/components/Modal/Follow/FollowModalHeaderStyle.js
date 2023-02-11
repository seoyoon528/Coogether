import styled from 'styled-components';

export const FollowModalHeaderStyle = styled.header`
  height: 16%;

  display: flex;
  justify-content: space-around;

  border-bottom: 0.5px solid #505050;

  button {
    font-family: 'Pretendard Bold';
    font-size: 2.4rem;
  }

  button:hover {
    color: #ffdb8d;
  }

  button.active {
    color: #febd2f;
  }
`;
