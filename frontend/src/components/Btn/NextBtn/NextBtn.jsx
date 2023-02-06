import React from 'react';

import { Button } from './NextBtnStyle';

function NextBtn(props) {
  const { size, name, color, onClick } = props;
  return (
    <Button>
      <button
        className={`${size} ${color}`}
        onClick={event => {
          event.preventDefault();
          onClick();
        }}
      >
        {name}
      </button>
    </Button>
  );
}

export default NextBtn;
