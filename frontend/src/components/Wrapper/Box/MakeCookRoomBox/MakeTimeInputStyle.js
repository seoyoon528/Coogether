import styled from 'styled-components';

export const StreamContents = styled.div`
  /* display: flex; */
  text-align: center;
  /* margin-bottom: 4rem; */
  p {
    text-align: left;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 14px;
  }
  input {
    width: 100%;
    height: 40px;
    color: inherit;
    margin-bottom: 1rem;
    border: 1px solid;
  }
  input[type='time'] {
    position: relative;
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: transparent;
  }
`;
