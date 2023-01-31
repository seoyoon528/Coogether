import React, { useRef } from 'react';

import * as S from './SearchBoxStyle';

// 레시피랑 요리방을 검색하는 네모난 박스만 만들 예정
function SearchBox(props) {
  const { onSaveEnteredItem, TEXT } = props;
  const inputRef = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();

    const inputItem = inputRef.current.value;
    if (inputItem.trim().length === 0) {
      return;
    }
    onSaveEnteredItem(inputItem);
  };

  return (
    <S.SearchFormWrapper onSubmit={formSubmitHandler}>
      <input type="text" ref={inputRef} placeholder={TEXT.props.children} />
      <button>click</button>
    </S.SearchFormWrapper>
  );
}

export default SearchBox;
