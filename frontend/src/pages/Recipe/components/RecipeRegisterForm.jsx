import React, { useRef, useState } from 'react';
import { SvgIcon } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import RecipeRegisterModal from './RecipeRegisterModal';
import { ImageSampleDiv } from './RecipeRegisterFormStyle';

function RecipeRegisterForm() {
  // 요리 이름
  const cookNameRef = useRef();

  // 요리 이미지
  const [cookImage, setCookImage] = useState('');
  // 재료
  const [ingredients, setIngredients] = useState([{}, {}, {}]);
  // 요리 수선
  const [cookOrder, setCookOrder] = useState(['', '']);

  // 모달 오픈
  const [isModalOpened, setIsModalOpened] = useState(false);

  // 재료 추가 인풋 생성
  const addIngredientHandler = event => {
    event.preventDefault();
    setIngredients(prev => {
      return [...prev, {}];
    });
  };

  // 재료 이름 입력
  const ingredientNameHandler = (idx, ingredient) => {
    setIngredients(prev => {
      const inputIngredients = prev;
      inputIngredients[idx].name = ingredient;
      return [...inputIngredients];
    });
  };

  // 재료 용량 입력
  const ingredientAmountHandler = (idx, amount) => {
    setIngredients(prev => {
      const inputIngredients = prev;
      inputIngredients[idx].amount = amount;
      return [...inputIngredients];
    });
  };

  // 요리 사진 추가
  const inputImageHandler = event => {
    setCookImage(URL.createObjectURL(event.target.files[0]));
  };

  // 요리 순서 추가 인풋 생성
  const addCookOrderHandler = event => {
    event.preventDefault();
    setCookOrder(prev => {
      return [...prev, ''];
    });
  };

  // 요리 순서 추가
  const inputCookOrderHandler = (idx, order) => {
    setCookOrder(prev => {
      const inputCookOrder = prev;
      inputCookOrder[idx] = order;
      return [...inputCookOrder];
    });
  };

  // modal 상태 변경
  const openIngredientModal = () => {
    setIsModalOpened(prev => {
      return !prev;
    });
  };

  // form 제출
  const recipeSubmitHandler = event => {
    event.preventDefault();

    console.log(cookNameRef.current.value, ingredients, cookOrder);
  };

  return (
    <form onSubmit={recipeSubmitHandler}>
      <section>
        <label htmlFor="cook-name">요리 제목</label>
        <input
          ref={cookNameRef}
          type="text"
          id="cook-name"
          placeholder="요리 제목을 입력해주세요"
        />
      </section>
      <br />
      <section>
        <label htmlFor="cook-image">
          사진 등록
          <ImageSampleDiv>
            {cookImage !== '' ? (
              <img src={cookImage} alt="food" width="250px" />
            ) : (
              <SvgIcon
                sx={{ fontSize: 100 }}
                component={AddPhotoAlternateIcon}
              />
            )}
          </ImageSampleDiv>
        </label>
        <input
          onChange={inputImageHandler}
          className="image-input"
          type="file"
          accept="image/*"
          id="cook-image"
        />
      </section>
      <br />
      <section>
        <label>재료 등록</label>
        <div>
          {isModalOpened && (
            <RecipeRegisterModal onConfirm={openIngredientModal} />
          )}
          {isModalOpened || (
            <button type="button" onClick={openIngredientModal}>
              한 번에 등록
            </button>
          )}
        </div>
        <div>
          {ingredients.map((ingredient, idx) => {
            return (
              <div key={`regiser-ingredients-${idx + 1}`}>
                <input
                  onChange={event => {
                    const inputIngredientName = event.target.value;
                    ingredientNameHandler(idx, inputIngredientName);
                  }}
                  type="text"
                  className="ingredient-name"
                />
                <input
                  type="text"
                  onChange={event => {
                    const inputIngredientAmount = event.target.value;
                    ingredientAmountHandler(idx, inputIngredientAmount);
                  }}
                  className="ingredient-amount"
                />
              </div>
            );
          })}
        </div>
        <button type="button" onClick={addIngredientHandler}>
          추가
        </button>
      </section>
      <br />
      <section>
        <label>요리 순서</label>
        <div>
          {cookOrder.map((order, idx) => {
            return (
              <div key={`cook-orders-${idx + 1}`}>
                <textarea
                  onChange={event => {
                    const inputCookOrder = event.target.value;
                    inputCookOrderHandler(idx, inputCookOrder);
                  }}
                  id={`cook-order-${idx + 1}`}
                  rows="5"
                  cols="80"
                />
              </div>
            );
          })}
        </div>
        <button type="button" onClick={addCookOrderHandler}>
          추가
        </button>
      </section>
      <br />
      <button type="submit">등록</button>
    </form>
  );
}

export default RecipeRegisterForm;
