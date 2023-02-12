import styled from 'styled-components';

export const CookRoomEnterModalContentStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem;

  height: 80vh;

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
    height: 80%;
  }

  .modal__cook-name {
    border: 2px solid #febd2f;
    border-radius: 4px;

    width: 50%;
    padding: 1.6rem;
    margin-bottom: 1.6rem;

    text-align: center;
  }

  .modal__ingredients-box {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 2.4rem;
    margin-bottom: 2.4rem;

    border: 1px solid #505050;
    border-radius: 4px;

    width: 90%;
    height: 70%;
  }

  .change-button-box {
    position: absolute;
    transform: translate(0, -50%);
    z-index: 1;

    width: 50%;
    height: 4rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #fbe3b3;
    border-radius: 70px;
  }

  .change-button {
    font-size: 1.6rem;
    font-family: 'Pretendard Medium';

    height: 90%;
    width: 48%;
  }

  .change-button.active {
    background-color: #febd2f;
    border-radius: 70px;
  }

  .modal__ingredients-contents {
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    text-align: center;

    overflow: auto;
  }

  .ingredient_icon {
    width: 100%;

    margin-bottom: 1.6rem;
  }

  .ingredient_icon img {
    width: 25%;
    height: 25%;
    border: 25%;
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
