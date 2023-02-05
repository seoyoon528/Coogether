import React from 'react';

export default function ProfileInformation(props) {
  const {
    profileInformation: {
      nickname,
      follower,
      following,
      temperature,
      like,
      rank,
      message,
    },
  } = props;
  return (
    <>
      <h4>{nickname}</h4>
      <div>
        <div className="follow">
          <p>
            팔로워 <span>{follower}</span> | 팔로잉 <span>{following}</span>
          </p>
        </div>
        <div>
          <div>{temperature}</div>
          <div>{like}</div>
          <div>{rank}</div>
        </div>
        <div>{message}</div>
      </div>
    </>
  );
}
