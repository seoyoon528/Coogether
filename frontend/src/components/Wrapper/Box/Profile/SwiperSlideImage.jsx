import React, { useState } from 'react';

export default function SwiperSlideImage(props) {
  // Props
  const { historyImg, recipeName, setIsModalOpened } = props;

  // useState
  const [isImageError, setIsImageError] = useState(
    (() => {
      if (historyImg) {
        return false;
      }
      return true;
    })()
  );

  return (
    <div
      className="history__image"
      onClick={() => {
        setIsModalOpened(true);
      }}
      aria-hidden
    >
      {!isImageError && (
        <img
          src={historyImg}
          alt={`${recipeName} 이미지`}
          onError={() => {
            console.log(5555555);
            setIsImageError(true);
          }}
        />
      )}
      {isImageError && (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FBE3B3',
            paddingLeft: '1.6rem',
            paddingRight: '1.6rem',
          }}
        >
          <h2>{recipeName}</h2>
        </div>
      )}
    </div>
  );
}
