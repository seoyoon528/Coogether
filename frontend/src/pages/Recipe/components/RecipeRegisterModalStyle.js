import styled from 'styled-components';

export const ModalOverlayStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.6rem;

  .modal-button__top {
    align-self: flex-end;
  }

  .modal-button__bottom {
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
  }

  .modal-button__bottom button {
    margin-left: 1.6rem;
  }

  header {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    text-align: center;
  }

  header p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    color: #505050;
  }

  section {
    border: 1px solid #febd2f;
    border-radius: 3px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-form__img {
    margin-top: 1.1rem;
    width: 56.8rem;
    max-height: 20.4rem;
  }

  .modal-form__img img {
    width: 100%;
    min-height: 100%;
  }
  .modal-form__info {
    font-size: 1.4rem;
    font-family: 'Pretendard Medium';
    color: #333333;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  section textarea {
    width: 100%;
    min-height: 8.8rem;
    border: 1px solid #505050;
    border-radius: 3px;
    padding: 1.6rem;

    ::placeholder {
      font-family: 'Pretendard Regular';
      font-size: 1.4rem;
      color: #505050;
    }
  }

  section div {
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
