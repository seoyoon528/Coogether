import styled from 'styled-components';

export const CookHistoryStyle = styled.section`
  .card {
    height: 40rem;

    border: 0.5px dashed #505050;
    border-radius: 4px;
  }

  .card__image {
    height: 60%;
  }

  .card__image img {
    width: 100%;
    height: 100%;

    border-radius: 4px;
  }

  .card__title {
  }

  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
