// .eslintrc.js 설정 추가
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'], // prettier => eslint와 출동되는 부분 기능 끄기
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'], // prettier => prettier를 eslint의 plugin으로 등록
  rules: {
    'react/react-in-jsx-scope': 0, // import React 생략 가능
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // js, jsx 모두 가능
    'react/button-has-type': 'off', // button 태그를 사용할 때 type 적어주지 않아도 괜찮음
    'react/prop-types': 'off', // props 사용할 떄 type 적지 않아도 괜찮음
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // 줄바꿈 에러해결 (정확하게 모르겠음)
    'no-shadow': 'off', // 같은 이름 사용하지 못하는 에러 off
    'no-unused-vars': ['warn'], // 사용 안한것 경고창 띄워줌
    'arrow-body-style': 0, // 화살표 함수 사용할 때 중괄호 {} 사용할 수 있음
    'no-console': 0, // console 오류 제거 => 개발중일땐 오류 안뜨게 설정해두고 개발 끝나면 켜서 log 지우기
    'import/prefer-default-export': 'off', // export default 없으면 생기는 오류를 꺼줌
    'jsx-a11y/label-has-associated-control': 'off', // label 사용시 input을 label 안에 작성하도록 하는 기능 off
    'react/jsx-props-no-spreading': 'off', // props spread 오류를 꺼둠
  },
};
