import styled from 'styled-components';
import NoContentImg from '../../../../assets/img/no_cook_history.jpg';

export const UserHistoryStyle = styled.section`
  h3 {
    margin-bottom: 1.6rem;
  }
`;

export const NoHistory = styled.div`
  width: 100%;
  height: 50vh;

  background-image: url(${NoContentImg});
  background-size: cover;
  background-repeat: no-repeat;

  p {
    font-size: 1.8rem;
    color: #505050;
  }
`;
