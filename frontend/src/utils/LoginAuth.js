const BACKEND_URL = `http://localhost:8080`;
const REDIRECT_URI = `http://localhost:3000/oauth/redirect`;

export default {
  getSocialLoginUrl(socialType) {
    return `${BACKEND_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`;
  },
  getSocialImage(socialType) {
    switch (socialType) {
      case 'google':
        return '구글이미지';
      case 'facebook':
        return '페북이미지';
      case 'kakao':
        return '카카오이미지';
      default:
        return '아무것도 없을때';
    }
  },
};
