import styled from 'styled-components';

export const RecipeRegisterStyle = styled.section`
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 2.4rem;
    font-family: 'Pretendard Bold';
  }

  /* 레시피 등록 페이지 Header */
  .recipe-register__title {
    text-align: center;
  }

  .recipe-register__title__sub {
    color: #505050;
    font-size: 1.6rem;
    margin-top: 1.6rem;
  }

  /* 레시피 등록 폼 */
  .recipe-register__form {
    width: 78vw;
    background-color: #fff8ea;
    border-radius: 60px;
    padding-top: 7.2rem;
    padding-left: 7.2rem;
    padding-right: 7.2rem;
    padding-bottom: 7.2rem;
    margin: 4rem;
  }

  .recipe-cook-button__add {
    display: flex;
    justify-content: center;
  }

  .recipe-cook-button__delete {
    display: flex;
    align-items: center;
  }

  /* 레시피 요리 제목 */
  #recipe-cook-name__input {
    width: 100%;
    height: 5.6rem;
    border: 0.5px solid #505050;
    border-radius: 4px;
    padding: 1.6rem;
    font-size: 1.6rem;
    color: black;

    ::placeholder {
      font-size: 1.6rem;
      color: #505050;
    }
  }

  /* 레시피 요리 분류 */
  #recipe-cook-category__select {
    width: 100%;
    border: 0.5px solid #505050;
    border-radius: 4px;
    padding: 1.6rem;
    height: 5.6rem;
    font-size: 1.6rem;
  }

  #recipe-cook-category__select > #placeholder {
    font-size: 1.6rem;
    color: #505050;
  }

  /* 레시피 요리 이미지 */
  #recipe-cook-image__area {
    border: 0.5px solid #505050;
    border-radius: 4px;
    background-color: white;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #recipe-cook-image__area > img {
    width: 100%;
    height: 100%;
  }

  /* 레시피 요리 재료 */
  .recipe-cook-ingredient__input {
    display: flex;
    justify-content: space-between;
  }

  .recipe-cook-ingredient__input input {
    width: 45%;
    height: 5.6rem;
    margin-bottom: 1.6rem;
    border: 0.5px solid #505050;
    border-radius: 4px;
    padding: 1.6rem;
    font-size: 1.6rem;
    color: black;

    ::placeholder {
      font-size: 1.6rem;
      color: #505050;
    }
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

    ::placeholder {
      font-size: 1.8rem;
      color: #505050;
      font-family: 'Pretendard Semibold';
    }
  }
`;
