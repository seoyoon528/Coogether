import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import axios from 'axios';

export default function FollowModalUser(props) {
  // Props
  const { followId } = props;

  // Redux
  const { userSeq } = useSelector(state => {
    return state.user;
  });

  // useParams
  const { userId: profileUserSeq } = useParams();

  // useState
  const [userData, setUserData] = useState({});
  const [isFollowed, setIsFollowed] = useState(false);

  // useEffect
  useEffect(async () => {
    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/user/${followId}`, // User Detail Data
      method: 'GET',
    };
    try {
      const userResponse = await axios(requestInfo);
      const userResponseData = await userResponse.data;
      if (userResponseData.followerList.length > 0) {
        setIsFollowed(
          userResponseData.followerList.some(({ followId, followFlag }) => {
            return userSeq === followId && followFlag === 'CONNECT';
          })
        );
      }
      setUserData({
        userNickname: userResponseData.userNickname,
        userImg: userResponseData.userImg,
      });
    } catch (error) {
      console.log(error);
    }
  }, [userSeq, followId]);

  return (
    <section>
      <div className="user-profile-image">
        <img src="#" alt={`${userData.userNickname} 프로필 이미지`} />
      </div>
      <div className="user-nickname">
        <p>{userData.userNickname}</p>
      </div>
      {userSeq && (
        <div className="follow-action-button">
          {!isFollowed && <button type="button">팔로우</button>}
          {isFollowed && <button type="button">팔로우 취소</button>}
        </div>
      )}
      ;
    </section>
  );
}
