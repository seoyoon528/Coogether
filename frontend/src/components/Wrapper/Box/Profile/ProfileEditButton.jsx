import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

// MUI
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

export default function ProfileEditButton(props) {
  // Props
  const {
    isEditActive,
    setIsEditActive,
    className,
    editData: { userNickname, userCookCategory, userIntroduce },
  } = props;

  // useParams
  const { userId } = useParams();

  // Redux
  const accessToken = useSelector(state => state.user.accessToken);

  // function
  const editProfile = async () => {
    const requestInfo = {
      url: `https://i8b206.p.ssafy.io:9000/api/user/update/${userId}`,
      method: 'PATCH',
      params: {
        nickname: userNickname,
        cookCategory: userCookCategory,
        introduce: userIntroduce,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const editResponse = await axios(requestInfo);
      console.log(editResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className={className}
      onClick={event => {
        event.preventDefault();
        if (isEditActive) {
          editProfile();
          setIsEditActive(false);
        } else {
          setIsEditActive(true);
        }
      }}
    >
      {!isEditActive && <EditIcon fontSize="large" />}
      {isEditActive && <DoneIcon fontSize="large" />}
    </button>
  );
}
