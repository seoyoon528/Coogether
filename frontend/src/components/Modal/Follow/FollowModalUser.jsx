import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function FollowModalUser(props) {
  const DUMMY_USER_SEQ = 1;
  const { followId } = props;
  const [userData, setUserData] = useState({});
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/user/${followId}`,
      method: 'GET',
    };
    try {
      const userResponse = await axios(requestInfo);
      const userResponseData = await userResponse.data;
      if (userResponseData.followerList.length > 0) {
        setIsFollowed(
          userResponseData.followingList.some(({ followId, followFlag }) => {
            return DUMMY_USER_SEQ === followId && followFlag === 'CONNECT';
          })
        );
      } else {
        setIsFollowed(false);
      }
      setUserData({
        userNickname: userResponseData.userNickname,
        userImg: userResponseData.userImg,
      });
    } catch (error) {
      console.log(error);
    }
  }, [followId]);

  return (
    <section>
      <div className="user-profile-image">
        <img src="#" alt={`${userData.userNickname} 프로필 이미지`} />
      </div>
      <div className="user-nickname">
        <p>{userData.userNickname}</p>
      </div>
      <div className="follow-action-button">
        <button>팔로우</button>
        <button>팔로우 취소</button>
        <button>삭제</button>
      </div>
      ;
    </section>
  );
}
