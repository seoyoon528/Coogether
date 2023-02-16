import styled from 'styled-components';

export const CookRoomContainer = styled.section`
  display: flex;
  justify-content: center;

  .main {
    width: 78vw;
  }

  & li {
    visibility: hidden;
  }
`;

export const UnderLine = styled.hr`
  border: 0.1rem solid #febd2f;
`;

export const SearchMainHeader = styled.h2`
  text-align: center;
  vertical-align: middle;
  font-size: 28px;
  line-height: auto;
  margin-top: 4.8rem;
`;

export const SearchSubHeader = styled.p`
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  line-height: auto;
  color: #4f4f4f;
  padding: 1.6rem;
`;

export const SearchContainer = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 3.2rem;

  .profile {
    width: 78vw;
  }
`;

export const Line = styled.hr``;
