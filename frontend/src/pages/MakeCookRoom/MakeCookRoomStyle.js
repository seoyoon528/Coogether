import styled from 'styled-components';

import loginBg from '../../assets/img/loginBackground.jpeg';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${loginBg});
`;

export const H3 = styled.h3`
  /* margin: 4rem; */
  padding-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Button = styled.button`
  text-align: center;
  justify-content: center;
  border: none;
  font-weight: 600;
  color: #febd2f;
  border: 2px solid #febd2f;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 96px;
  height: 32px;
  margin-bottom: 2rem;
  border-radius: 10px;

  &:hover {
    background-color: #febd2f;
    color: #ffffff;
  }
`;
