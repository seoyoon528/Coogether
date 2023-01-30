import styled from 'styled-components';

export const ModalOverlayStyle = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 70vw;
  height: 70vh;

  h1 {
    color: white;
    text-align: center;
  }

  p {
    color: white;
    margin: 1rem;
  }

  form {
    border: 1px solid white;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form div {
    display: flex;
    justify-content: center;
  }
`;

export const BackdropStyle = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 90%;
`;
