import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Room from './pages/Room/Room';
import SearchCookRoom from './pages/Search/SearchCookRoom';
import SearchRecipe from './pages/Search/SearchRecipe';
import TemperatureRank from './pages/Rank/TemperatureRank';
import RecipeDetail from './pages/Recipe/RecipeDetail';
import MyIngredientsManage from './pages/MyIngredientsManage/MyIngredientsManage';
import Login from './pages/User/Login/Login';
import Signin from './pages/User/SignIn/Signin';
import Profile from './pages/User/Profile/Profile';
import RecipeRegister from './pages/Recipe/RecipeRegister';
import MakeCookRoom from './pages/MakeCookRoom/MakeCookRoom';

import RedirectPage from './utils/RedirectPage';
import Footer from './components/Nav/Footer';
import FloatBtn from './components/Btn/FloatBtn/FloatBtn';

function App() {
  const [modal, setModal] = useState(false);
  const onOpneModal = () => {
    setModal(true);
  };
  // 예지님!!!!!! 얘를 방송생성 모달에서 사용하시면 됩니다!!!!!!!!
  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Main" />
        </Route>
        <Route path="/Main" component={Main} exact />
        <Route path="/Room/:roomId" component={Room} />
        <Route path="/SearchCookRoom" component={SearchCookRoom} />
        <Route path="/SearchRecipe" component={SearchRecipe} />
        <Route path="/Recipe/:recipeId" component={RecipeDetail} />
        <Route path="/RecipeRegister" component={RecipeRegister} />
        <Route path="/Rank" component={TemperatureRank} />
        <Route path="/Login" component={Login} />
        <Route path="/Login/oauth2/code/kakao" component={RedirectPage} />
        <Route path="/Signin" component={Signin} />
        <Route path="/Profile/:userId" component={Profile} />
        <Route path="/MyIngredients" component={MyIngredientsManage} />
        <Route path="/MakeCookRoom" component={MakeCookRoom} />
      </Switch>
      <FloatBtn onOpneModal={onOpneModal} />
      <Footer />
    </div>
  );
}

export default App;
