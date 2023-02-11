import styled from 'styled-components';

export const ProfileInformationStyle = styled.form`
  position: relative;

  // form__button
  .form__button {
    position: absolute;

    top: 50%;
    right: 0;

    transform: translate(0, -50%);
  }

  // 닉네임
  .form__nickname {
    position: relative;
  }

  .form__nickname input {
    border: none;

    font-family: 'Pretendard Bold';
    font-size: 3.2rem;

    width: 50%;

    outline: none;
  }

  .form__nickname input.active {
    border: 2px solid #febd2f;
  }

  // 팔로우
  .follow {
    margin-top: 0.8rem;
  }

  .follow-button-box {
    display: flex;
    align-items: center;
  }

  .follow-button-box button {
    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
    color: #505050;
  }

  .follow-button-box span {
    font-family: 'Pretendard Medium';
    font-size: 2rem;
    color: black;

    margin-left: 0.8rem;
  }

  #unfollow-button {
    border-radius: 4px;
    background-color: #dee2e6;

    height: 3.2rem;

    padding-left: 1.6rem;
    padding-right: 1.6rem;

    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
    color: black;
  }

  #unfollow-button:hover {
    background-color: #adb5bd;
    color: white;
  }

  // 랭크, 온도, 선호
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

  .user-information-value-box {
    margin-top: 1.6rem;
    padding-top: 0.4rem;

    display: flex;
    justify-content: center;
  }

  // 메시지
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

    font-family: 'Pretendard Regular';
    font-size: 1.6rem;

    outline: none;
  }

  .message__input.exist {
    text-align: start;
    color: #000;
  }

  .message__input.active {
    border: 2px solid #febd2f;
  }
`;
