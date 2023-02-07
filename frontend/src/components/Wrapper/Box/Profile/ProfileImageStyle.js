import styled from 'styled-components';

export const ProfileImageStyle = styled.div`
  position: relative;

  ::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;

    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .profile__Nickname {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    background-color: #febd2f;
  }

  .profile__Nickname h1 {
    width: 80%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
