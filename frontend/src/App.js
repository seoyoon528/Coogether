import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Room from './pages/Room/Room';
import SearchCookRoom from './pages/Search/SearchCookRoom';
import SearchRecipe from './pages/Search/SearchRecipe';
import MyIngredientsManage from './pages/MyIngredientsManage/MyIngredientsManage';
import Login from './pages/User/Login/Login';
import Signin from './pages/User/SignIn/Signin';
import Profile from './pages/User/Profile/Profile';
import RecipeRegister from './pages/Recipe/RecipeRegister';
import MakeCookRoom from './pages/MakeCookRoom/MakeCookRoom';

import RedirectPage from './utils/RedirectPage';
import Footer from './components/Nav/Footer';
import FloatBtn from './components/Btn/FloatBtn/FloatBtn';
import NotFound from './pages/NotFound/NotFound';
import Baby from './pages/DUMMY/Baby';

function App() {
  const [isShow, setIsShow] = useState(true);
  const onChangeShow = () => {
    setIsShow(!isShow);
  };

  const userSeq = useSelector(state => {
    return state.user.userSeq;
  });

  return (
    <div style={{ position: 'relative' }}>
      {isShow && <Nav />}
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to="/Main" />
        </Route> */}
        <Route path="/" exact>
          <Baby onChangeShow={onChangeShow} />
        </Route>
        <Route path="/Main" exact>
          <Route component={Main} onChangeShow={onChangeShow} isShow={isShow} />
        </Route>
        <Route path="/Room/:roomId">
          <Room component={Room} onChangeShow={onChangeShow} />
        </Route>
        <Route path="/SearchCookRoom" component={SearchCookRoom} />
        <Route path="/SearchRecipe" component={SearchRecipe} />
        <Route path="/RecipeRegister" component={RecipeRegister} />
        <Route path="/Login" exact>
          <Login component={Login} onChangeShow={onChangeShow} />
        </Route>
        <Route path="/Login/oauth2/code/kakao">
          <RedirectPage component={RedirectPage} onChangeShow={onChangeShow} />
        </Route>
        <Route path="/Signin">
          <Signin component={Signin} onChangeShow={onChangeShow} />
        </Route>
        <Route path="/Profile/:userId" component={Profile} />
        <Route path="/MyIngredients" component={MyIngredientsManage}>
          {userSeq ? <MyIngredientsManage /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/MakeCookRoom" component={MakeCookRoom} />
        <Route path="*">
          <NotFound onChangeShow={onChangeShow} />
        </Route>
      </Switch>
      {isShow && userSeq && <FloatBtn />}
      {isShow && <Footer />}
    </div>
  );
}

export default App;
