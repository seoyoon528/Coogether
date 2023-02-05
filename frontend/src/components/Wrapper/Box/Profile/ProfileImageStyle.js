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
`;
