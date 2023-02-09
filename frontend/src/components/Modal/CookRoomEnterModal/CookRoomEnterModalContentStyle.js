import styled from 'styled-components';

export const CookRoomEnterModalContentStyle = styled.section`
  display: flex;
  margin: 4rem;
  flex-direction: column;
  align-items: center;

  // Header
  header {
    text-align: center;
  }

  .modal__title-description {
    margin: 0.8rem;
  }

  // Main
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1.6rem;

    width: 100%;
  }

  .modal__cook-name {
    border: 2px solid #febd2f;
    border-radius: 4px;
    width: 50%;
    text-align: center;
    padding: 1.6rem;
  }

  .modal__ingredients-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2.4rem;
    margin-bottom: 2.4rem;

    border: 1px solid #505050;
    border-radius: 4px;

    width: 90%;
  }

  .change-button-box {
    z-index: 1;
  }
  .modal__ingredients-contents {
    padding: 4rem;
    text-align: center;
  }

  .ingredient_button {
    width: 64%;
    border: 2px solid #febd2f;
    border-radius: 4px;
    padding: 0.8rem;

    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
  }

  // Footer
  footer {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .submit-button {
    width: 50%;

    display: flex;
    justify-content: space-evenly;
  }
`;
