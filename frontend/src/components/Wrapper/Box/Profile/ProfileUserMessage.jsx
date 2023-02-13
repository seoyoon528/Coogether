import React from 'react';

export default function ProfileUserMessage(props) {
  // Props
  const { userIntroduce, isEditActive, dispatch } = props;

  return (
    <div className="message">
      <textarea
        className={`message__input ${userIntroduce ? 'exist' : ''} ${
          isEditActive ? 'active' : ''
        }`}
        type="text"
        readOnly={!isEditActive}
        value={userIntroduce}
        onChange={event => {
          const userIntroduce = event.target.value;
          dispatch({ type: 'edit', payload: { userIntroduce } });
        }}
        placeholder="상태 메시지를 입력하세요"
      />
    </div>
  );
}
