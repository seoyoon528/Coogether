import styled from 'styled-components';

export const RecipeRegisterStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.8rem;

  label {
    font-size: 2.4rem;
    font-family: 'Pretendard Bold';
  }

  input {
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

  .recipe-cook-button__add {
    display: flex;
    justify-content: center;
  }

  .recipe-cook-button__delete {
    display: flex;
    align-items: center;
  }

  /* 레시피 요리 제목 */

  /* 레시피 요리 분류 */
  #recipe-food-category-autocomplete {
    padding: 0;
    border: none;
    height: auto;

    ::placeholder {
      font-family: 'Pretendard Regular';
      font-size: 1.6rem;
      opacity: 1;
    }
  }

  /* .recipe-food-category__select-category.active {
    color: black;
  }

  .recipe-food-category__select {
    display: flex;
    align-items: center;

    font-family: 'Pretendard Regular';
    font-size: 1.6rem;
    color: #505050;

    background-color: white;

    width: 100%;
    height: 5.6rem;
    padding: 1.6rem;

    border: 0.5px solid #505050;
    border-radius: 4px;

    cursor: pointer;
  }

  .recipe-food-category__select.active {
    color: black;
  }

  .recipe-food-category__option {
    display: none;

    width: 100%;

    background-color: white;

    border: 0.5px solid #505050;
    border-radius: 4px;

    position: absolute;
    z-index: 1;

    overflow-y: scroll;
    height: 30vh;

    box-shadow: 0px 10px 10px 0 #505050;

    cursor: pointer;
  }

  .recipe-food-category__option.active {
    display: block;
  }

  .recipe-food-category__option li {
    padding: 1.6rem;
    font-family: 'Pretendard Regular';
    font-size: 1.8rem;
    border-top: 1px solid #505050;
  }

  .recipe-food-category__option li:hover {
    background-color: #febd2f;
  } */

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
  #recipe-register-ingredient__search {
    margin-bottom: 1.6rem;
  }

  .recipe-cook-ingredient__input {
    display: flex;
    justify-content: space-between;
  }

  .recipe-cook-ingredient__input input {
    width: 45%;
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

    ::placeholder {
      font-size: 1.8rem;
      color: #505050;
      font-family: 'Pretendard Semibold';
    }
  }
`;
