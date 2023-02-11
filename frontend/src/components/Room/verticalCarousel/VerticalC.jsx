/* eslint-disable */
import React, { useState } from 'react';
import cn from 'classnames';

import './verticalC.css';

export const data = [
  {
    introline: 'dogs',
    id: 'dogs',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Dogs',
      copy: 'Dog ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'elephants',
    id: 'elephants',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Elephants',
      copy: 'Elephant ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'bears',
    id: 'bears',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Bears',
      copy: 'Bears ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'lizards',
    id: 'lizards',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Lizards',
      copy: 'Lizards ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'snakes',
    id: 'snakes',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Snakes',
      copy: 'Snakes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'cats',
    id: 'cats',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Cats',
      copy: 'Cats ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'giraffes',
    id: 'giraffes',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Giraffes',
      copy: 'Giraffes ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'owls',
    id: 'owls',
    content: {
      image: 'https://via.placeholder.com/400x200?text=Owls',
      copy: 'Owls ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
  {
    introline: 'horses',
    id: 'horses',
    content: {
      image: 'https://via.placeholder.com/400x200?text=horses',
      copy: 'Horses ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan est ornare, ultricies erat a, dapibus lectus.',
    },
  },
];

const VerticalC = ({ data }) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 52;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = itemIndex => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = direction => {
    setActiveIndex(prevIndex => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick('prev')}
          >
            이전
          </button>

          <div className="carousel">
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn('carousel-item', {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <=
                        visibleStyleThreshold,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    {item.introline}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick('next')}
          >
            이후
          </button>
        </div>
      </section>
    </div>
  );
};

export default VerticalC;
