import styled from 'styled-components';

export const RecipeRegisterStyle = styled.section`
  margin-left: 2.4rem;
  margin-right: 2.4rem;

  .recipe-register__title {
    margin-top: 4.8rem;
    text-align: center;
  }

  .recipe-register__title__subtext {
    color: #505050;
    font-size: 1.4rem;
    margin-top: 0.8rem;
    margin-bottom: 4rem;
  }

  .recipe-register-form__ingredient {
    display: flex;
    justify-content: center;
  }

  .recipe-register-form__ingredient__input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recipe-register-form__order {
    display: flex;
    justify-content: center;
  }

  .recipe-register-form__order__input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recipe-register-form__title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recipe-register-form__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recipe-register-form__image__label {
    display: flex;
  }

  .recipe-register-form__submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  label {
    font-size: 1.6rem;
    font-family: 'Pretendard Bold';
  }

  input {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;
