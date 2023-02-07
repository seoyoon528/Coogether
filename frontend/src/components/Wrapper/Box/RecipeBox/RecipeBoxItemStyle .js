import styled from 'styled-components';

export const RecipeBoxItemStyle = styled.div`
  width: 27.2rem;
  height: 40rem;
  background-color: #fff8ea;

  & img {
    height: 40%;
    width: 100%;
  }

  & h4 {
    text-align: center;
    line-height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  & hr {
    width: 216px;
    border: 0.1rem solid #febd2f;
  }

  & p {
    padding-top: 1rem;
    font-family: 'Pretendard Regular';
    text-align: center;
    line-height: auto;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
`;
