import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Mainlogo from '../../assets/img/mainlogo.png';
import { Navstyle, NavbarBlock, Line, Imgstyle, Loginstyle } from './NavStyle';

function Nav() {
  const isLogin = useSelector(state => state.user.authenticated);
  return (
    <>
      <NavbarBlock>
        <Box display="grid" gridTemplateColumns="repeat(16, 1fr)" gap={1}>
          {/* <NavbarBlock> */}

          <Box gridColumn="span 1" />
          <Box gridColumn="span 2">
            <Imgstyle to="/Main">
              <img src={Mainlogo} alt="mainlogo" width="72px" />
            </Imgstyle>
          </Box>
          <Box gridColumn="span 1">
            <Navstyle to="/SearchCookRoom">요리방</Navstyle>
          </Box>
          <Box gridColumn="span 1">
            <Navstyle to="/SearchRecipe">레시피</Navstyle>
          </Box>
          <Box gridColumn="span 1">
            <Navstyle to="/MyIngredients">냉장고</Navstyle>
          </Box>
          <Box gridColumn="span 1">
            <Navstyle to="/Rank">랭킹</Navstyle>
          </Box>
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box grid-column="span 1">
            <Loginstyle to="/Login">{!isLogin ? 'Login' : 'Logout'}</Loginstyle>
          </Box>
          {/* </NavbarBlock> */}
        </Box>
      </NavbarBlock>
      <Line />
    </>
  );
}

export default Nav;
