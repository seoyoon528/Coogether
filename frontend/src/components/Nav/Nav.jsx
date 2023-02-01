import React from 'react';
import Mainlogo from '../../assets/img/Mainlogo.png';
import { Navstyle, NavbarBlock, Line, Imgstyle, Loginstyle } from './NavStyle';

function Nav() {
  return (
    <>
      <NavbarBlock>
        <Imgstyle to="/Main">
          <img src={Mainlogo} alt="mainlogo" width="72px" />
        </Imgstyle>
        <Navstyle to="/SearchCookRoom">요리방</Navstyle>
        <Navstyle to="/SearchRecipe">레시피</Navstyle>
        <Navstyle to="/MyIngredients">냉장고</Navstyle>
        <Navstyle to="/Rank">랭킹</Navstyle>
        <Loginstyle to="/Login">Login</Loginstyle>
      </NavbarBlock>
      <Line />
    </>
  );
}

export default Nav;
