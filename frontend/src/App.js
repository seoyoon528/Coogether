import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

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
import KAKAOAuth from './utils/KAKAOAuth';

function App() {
  return (
    <div>
      <ul>
        <li>
          [nav바 로 변경해야 합니다 검색페이지로 이동하는 위치 입니다.]
          <NavLink to="/Main">쿠게더</NavLink>
          <NavLink to="/SearchCookRoom"> 요리방</NavLink>
          <NavLink to="/SearchRecipe"> 레시피</NavLink>
        </li>
      </ul>
      <br />

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
        <Route path="/oauth/kakao/callback">
          <KAKAOAuth />
        </Route>
        <Route path="/Signin" component={Signin} />
        <Route path="/Profile/:userId" component={Profile} />
        <Route path="/MyIngredients" component={MyIngredientsManage} />
      </Switch>
    </div>
  );
}

export default App;
