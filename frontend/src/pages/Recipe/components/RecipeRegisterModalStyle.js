import styled from 'styled-components';

export const ModalOverlayStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 50vw;
  height: 50vh;

  p {
    color: #505050;
  }
`;

export const BackdropStyle = styled.div`
  position: fixed;
  z-index: auto;
  width: 100vw;
  height: 100vh;
  background-color: #505050;
  opacity: 90%;
`;
