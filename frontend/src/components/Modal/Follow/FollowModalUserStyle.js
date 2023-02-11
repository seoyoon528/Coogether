import styled from 'styled-components';

export const FollowModalUserStyle = styled.section`
  display: flex;
  align-items: center;

  margin-bottom: 2.4rem;

  .user-profile-image {
    position: relative;
    height: 100%;
    width: 100%;

    cursor: pointer;
  }

  .user-profile-image::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .user-profile-image img {
    position: absolute;

    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .user-nickname p {
    font-size: 1.8rem;
    font-family: 'Pretendard Semibold';

    cursor: pointer;
  }

  .follow-action-button {
  }

  .follow-action-button button {
    padding: 0;
  }
`;
