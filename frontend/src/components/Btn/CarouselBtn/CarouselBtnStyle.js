import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  text-align: center;
  z-index: 9999;
  position: absolute;
  left: 25%;
  transform: translate(-50%, 0%);
`;

export const SwitchWrapper = styled.div`
  position: relative;
  display: inline-flex;
  padding: 4px;
  border: 1px solid lightgrey;

  border-radius: 30px;
  background: #febd2f;

  [type='radio'] {
    position: absolute;
    left: -9999px;
  }
  // 선택된 글씨
  [type='radio']:checked#monthly ~ label[for='monthly'],
  [type='radio']:checked#yearly ~ label[for='yearly'] {
    color: black;
    background: #fbe3b3;
  }

  // 선택된 버튼에 호버했을 때
  [type='radio']:checked#monthly ~ label[for='monthly']:hover,
  [type='radio']:checked#yearly ~ label[for='yearly']:hover {
    background: #fbe3b3;
    color: white;
  }

  [type='radio']:checked#monthly + label[for='yearly'] ~ .highlighter {
    transform: none;
  }

  [type='radio']:checked#yearly + label[for='monthly'] ~ .highlighter {
    transform: translateX(100%);
  }
`;

export const Label = styled.label`
  font-size: 16px;
  z-index: 1;
  min-width: 100px;
  line-height: 32px;
  cursor: pointer;
  border-radius: 30px;
  transition: color 0.25s ease-in-out;
  color: white;

  &:hover {
    background: #dee2e6;
  }
`;

export const Highlighter = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  border-radius: 30px;
  background: #febd2f;
  transition: transform 0.25s ease-in-out;
`;
