import React from 'react';

import { Button } from './NextBtnStyle';

function NextBtn(props) {
  const { size, name, color, action } = props;
  return (
    <Button>
      <button
        className={`${size} ${color}`}
        onClick={event => {
          event.preventDefault();
          action();
        }}
      >
        {name}
      </button>
    </Button>
  );
}

export default NextBtn;
