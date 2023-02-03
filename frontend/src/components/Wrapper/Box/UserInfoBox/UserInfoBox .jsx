import React from 'react';

import { UserInfoBoxStyle } from './UserInfoBoxStyle ';

function UserInfoBox(props) {
  const { children } = props;
  return <UserInfoBoxStyle>{children}</UserInfoBoxStyle>;
}

export default UserInfoBox;
