import styled from 'styled-components';

export const Circle = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: smaller;
  text-align: center;
  line-height: 64px;
  margin-top: 0.5rem;
  /* margin-bottom: 1rem; */
  z-index: 1;
  position: relative;

  p {
    position: absolute;
    left: 11.1%;
    bottom: 30%;
    text-align: center;
  }

  img {
    width: 80%;
    height: 80%;
  }
`;
