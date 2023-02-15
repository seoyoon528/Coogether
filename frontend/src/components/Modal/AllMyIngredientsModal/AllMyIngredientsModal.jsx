import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// import axios from 'axios';

// MUI
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import { Circle, Button } from './AllMyIngredientsModalStyle';

// Style
import './AllMyIngredientsModal.scss';

function AllMyIngredientsModal({
  onClose,
  fridge,
  myFridge,
  onFavFridge,
  onFridge,
}) {
  console.log(onFavFridge);
  console.log(onFridge);

  // useState
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectIngredientId, setselectIngredientId] = useState('');
  // const [favIngre, setFavIngre] = useState([]);
  // const [isFavPatched, setIsFavPatched] = useState(false);
  // const [isMyIngrePatched, setIsMyIngrePatched] = useState(false);

  // function
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const idHandleClick = i => {
    setselectIngredientId(i?.ingredient.ingredientId);
    setVisible(!visible);
  };
  const handleClose = () => {
    onClose?.();
  };

  // Redux
  // const accessToken = useSelector(state => state.user.accessToken);
  // const isLogin = useSelector(state => state.user.userSeq);

  // // 즐겨찾기 patch
  // const favIngredient = i => {
  //   const inorOutIngredient = async target => {
  //     const sendIngredient = await axios.patch(
  //       // `https://i8b206.p.ssafy.io:9000/api/myIngredient/create/fav/1/${target}`,
  //       `https://i8b206.p.ssafy.io:9000/api/myIngredient/create/fav/${isLogin}/${target}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     if (!isFavPatched) {
  //       setIsFavPatched(true);
  //     }
  //     setFavIngre([...sendIngredient.data.map(v => v)]);
  //   };
  //   inorOutIngredient(i.ingredientId);
  // };

  // // 내 냉장고 patch
  // const sumbitIngredient = f => {
  //   const inorOutIngredient = async target => {
  //     console.log(target);
  //     const sendIngredient = await axios.patch(
  //       // `https://i8b206.p.ssafy.io:9000/api/myIngredient/update/1/${target}`,
  //       `https://i8b206.p.ssafy.io:9000/api/myIngredient/update/${isLogin}/${target}`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     if (!isMyIngrePatched) {
  //       setIsMyIngrePatched(true);
  //     }
  //     setMyFridge([...sendIngredient.data.map(v => v)]);
  //   };
  //   inorOutIngredient(f.ingredientId);
  // };

  // Component
  const afterPatch = myFridge.map(f => {
    return (
      <span key={f.ingredient.ingredientId} style={{ textAlign: 'center' }}>
        <Circle
          key={f}
          onClick={() => {
            idHandleClick(f);
          }}
        >
          <img src={f.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div>{f.ingredient.ingredientName}</div>
        {selectIngredientId === f.ingredient.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                onFavFridge(f.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                onFridge(f.ingredient);
                setVisible(!visible);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </span>
    );
  });

  const fridgeIngredient = fridge.map(i => {
    return (
      <span key={i.ingredient.ingredientId} style={{ textAlign: 'center' }}>
        <Circle
          key={i}
          onClick={() => {
            idHandleClick(i);
          }}
        >
          <img src={i?.ingredient.ingredientIcon} alt="icon" />
        </Circle>
        <div>{i?.ingredient.ingredientName}</div>
        {selectIngredientId === i?.ingredient.ingredientId && visible && (
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                onFavFridge(i.ingredient);
                setVisible(!visible);
              }}
            >
              <BookmarkAddRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
            <Button
              onClick={() => {
                onFridge(i.ingredient);
                setVisible(!visible);
              }}
            >
              <KitchenRoundedIcon style={{ fontSize: '20px' }} />
            </Button>
          </div>
        )}
      </span>
    );
  });

  return (
    <div className="Overlay" onClick={handleClose} aria-hidden>
      <div aria-hidden className="fridge" onClick={e => e.stopPropagation()}>
        <div className={`door top ${isActive ? 'active' : ''}`} />
        <button
          aria-label="Mute volume"
          className={`door bottom ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        />
        <div className="container">
          <div className="shelves" />
          {myFridge.length > 0 ? afterPatch : fridgeIngredient}
        </div>
      </div>
    </div>
  );
}

export default AllMyIngredientsModal;
