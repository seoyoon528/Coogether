import React from 'react';

import red from '../../assets/img/chef-red.png';
import orange from '../../assets/img/chef-orange.png';
import yellow from '../../assets/img/chef-yellow.png';
import green from '../../assets/img/chef-green.png';
import blue from '../../assets/img/chef-blue.png';
import navy from '../../assets/img/chef-navy.png';
import purple from '../../assets/img/chef-purple.png';

export default function ChefHat(props) {
  const { color, className } = props;
  return (
    <img
      src={(() => {
        switch (color) {
          case '빨강':
            return red;
          case '주황':
            return orange;
          case '노랑':
            return yellow;
          case '초록':
            return green;
          case '파랑':
            return blue;
          case '남색':
            return navy;
          default:
            return purple;
        }
      })()}
      alt="chef-hat 아이콘"
      className={className}
    />
  );
}
