import React, { useState } from 'react';

export default function SwiperSlideImage(props) {
  // Props
  const { historyImg, recipeName } = props;

  // useState
  const [isImageError, setIsImageError] = useState(false);

  return (
    <div className="history__image">
      {!isImageError && (
        <img
          src={historyImg}
          alt={`${recipeName} 이미지`}
          onError={() => {
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
          }}
        >
          <h2>{recipeName}</h2>
        </div>
      )}
    </div>
  );
}
