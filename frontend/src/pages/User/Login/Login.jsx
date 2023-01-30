import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../../../utils/Auth';

function Login() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <Router>
      <Switch>
        <h1>
          <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </h1>
        <Route path="/oauth/kakao/callback">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default Login;
