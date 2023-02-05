import React from 'react';

// Swiper
import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';

export default function ProfileSwiper(props) {
  const { histories } = props;
  return (
    <Swiper
      modules={[Navigation, Mousewheel]}
      spaceBetween={48}
      slidesPerView={3}
      navigation
      mousewheel
      onSwiper={swiper => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {histories.map(history => {
        return (
          <SwiperSlide key={history.id}>
            <div className="card">
              <div className="card__image">
                <img src={history.image} alt="요리 사진" />
              </div>
              <h4 className="card__title">{history.title}</h4>
              <div className="card__content">
                <p className="cook">
                  {history.cooks.map(cook => {
                    return <span key={cook}>{cook}</span>;
                  })}
                </p>
                <p className="date">{history.date}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
