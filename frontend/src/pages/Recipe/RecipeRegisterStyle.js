import styled from 'styled-components';

export const RecipeRegisterStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding-top: 4.8rem;

  .background-image img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    opacity: 15%;
  }

  label {
    font-size: 2.4rem;
    font-family: 'Pretendard Bold';
  }

  .recipe-register-form__input {
    width: 100%;
    height: 5.6rem;
    padding: 1.6rem;

    border: 0.5px solid #505050;
    border-radius: 4px;

    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
    color: black;

    ::placeholder {
      font-size: 1.6rem;
      color: #505050;
    }
  }

  /* 레시피 등록 페이지 Header */
  .recipe-register__title {
    text-align: center;
  }

  .recipe-register__title__sub {
    margin-top: 1.6rem;

    font-size: 1.6rem;
    color: #505050;
  }

  /* 레시피 등록 폼 */
  .recipe-register__form {
    width: 78vw;
    padding: 7.2rem;
    margin: 4rem;

    background-color: #fff8ea;
    border-radius: 60px;
  }

  .recipe-register-form__submit-button {
    display: flex;
    justify-content: center;
  }

  .recipe-cook-button__add {
    display: flex;
    justify-content: center;
  }

  .recipe-cook-button__delete {
    display: flex;
    align-items: center;
  }

  /* 레시피 요리 이미지 */
  #recipe-cook-image__area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24rem;

    border: 0.5px solid #505050;
    border-radius: 4px;

    background-color: white;
  }

  #recipe-cook-image__area > img {
    width: 100%;
    height: 100%;
  }

  /* 레시피 요리 재료 */
  .recipe-register-ingredient__backdrop {
    display: none;

    position: absolute;

    width: 100vw;
    height: 100vh;

    z-index: 1;
  }

  .recipe-register-ingredient__backdrop.active {
    display: block;
  }

  .recipe-register__search-box {
    position: relative;
    margin-bottom: 1.6rem;
  }

  #recipe-register-ingredient__search {
  }

  .recipe-register-ingredient__option {
    display: none;

    position: absolute;
    z-index: 2;

    width: 100%;
    max-height: 30vh;

    background-color: white;

    border: 0.5px solid #505050;
    border-radius: 4px;

    overflow-y: scroll;

    box-shadow: 0px 10px 10px 0 #505050;

    cursor: pointer;
  }

  .recipe-register-ingredient__option.active {
    display: block;
  }

  .recipe-register-ingredient__option li {
    padding: 1.6rem;

    font-family: 'Pretendard Medium';
    font-size: 1.6rem;
    color: #000;
  }

  .recipe-register-ingredient__option li:hover {
    background-color: orange;
  }

  .recipe-cook-ingredient__input {
    display: flex;
    justify-content: space-between;
  }

  .recipe-cook-ingredient__input input {
    width: 48%;
    margin-bottom: 1.6rem;
  }

  .recipe-cook-ingredient__name {
  }
  .recipe-cook-ingredient__amount {
  }

  /* 레시피 요리 순서 */
  .recipe-order__input {
    display: block;
    width: 100%;
    height: 12rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem;
    font-size: 1.6rem;
    color: black;
    resize: none;
    font-family: 'Pretendard Regular';

    ::placeholder {
      font-size: 1.8rem;
      color: #505050;
      font-family: 'Pretendard Semibold';
    }
  }
`;
