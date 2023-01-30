import styled from 'styled-components';

export const CookRoomItemWrapper = styled.div`
  height: 255px;
  width: 216px;
`;

export const CookRoomItemImg = styled.img`
  height: 160px;
  width: 216px;
`;

export const KingWrapper = styled.div`
  height: 14px;

  & p {
    text-align: left;
    vertical-align: top;
    font-size: 12px;
    line-height: auto;
    color: #4f4f4f;
  }
`;

export const roomTitle = styled.h4`
  text-align: left;
  vertical-align: top;
  line-height: auto;
  color: #000000;
`;

export const StartTimeWrapper = styled.div`
  height: 20px;
  width: 75px;

  & div {
    border-radius: 0.2rem;
    height: 20px;
    width: 68px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & p {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: auto;
    color: #ffffff;
  }
`;

export const TagWrapper = styled.div`
  /* height: 19px;
  width: 38px; */
  border-radius: 0.95rem;
  height: 19px;
  width: 4rem;
  background-color: #febd2f;

  & div {
  }

  & span {
    text-align: center;
    vertical-align: middle;
    /* font-size: 12px; */
    /* font-family: Pretendard Variable; */
    line-height: auto;
    color: #ffffff;
  }
`;

// export const ItemRectangle = styled.div`
//   border-radius: 0.2rem;
//   height: 20px;
//   width: 68px;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

// export const Tag = styled.p`
//   text-align: center;
//   vertical-align: middle;
//   font-size: 5px;
//   line-height: auto;
//   color: #ffffff;
//   border-radius: 0.95rem;
//   height: 19px;
//   width: 5rem;
//   background-color: #febd2f;
// `;
