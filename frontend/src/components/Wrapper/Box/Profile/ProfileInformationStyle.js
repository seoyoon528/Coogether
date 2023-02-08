import styled from 'styled-components';

export const ProfileInformationStyle = styled.form`
  position: relative;

  // form__button class
  .form__button {
    position: absolute;

    top: 50%;
    right: 0;

    transform: translate(0, -50%);
  }

  .form__nickname {
    position: relative;
  }

  .form__nickname input {
    border: none;

    font-family: 'Pretendard Bold';
    font-size: 3.2rem;

    width: 50%;
  }

  .form__nickname.active {
    border: 1px solid #505050;
  }

  .follow {
    margin-top: 0.8rem;
  }

  .follow p {
    color: #505050;
  }

  .follow p span {
    font-family: 'Pretendard Medium';
    font-size: 1.8rem;
    color: black;

    margin-left: 0.8rem;
  }

  .status {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  .item {
    width: 60%;

    text-align: center;
  }

  .icon img {
    width: 100%;
  }

  .item p {
    font-size: 1.8rem;
  }

  .icon p {
    margin-top: 0.8rem;

    font-size: 1.4rem;
    color: #505050;
  }

  .message.userInput {
    text-align: start;
    color: #000;
  }

  .message__input {
    width: 100%;

    padding: 3.2rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;

    border: 0.5px solid #505050;
    border-right: 0;
    border-left: 0;

    text-align: center;
    color: #505050;
  }

  .message__input.exist {
    text-align: start;
    color: #000;
  }

  .message__input.active {
  }

  .user-information-value-box {
    margin-top: 1.6rem;
    padding-top: 0.4rem;

    display: flex;
    justify-content: center;
  }
`;
