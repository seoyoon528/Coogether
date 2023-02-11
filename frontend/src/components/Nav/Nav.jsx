import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Avatar } from '@mui/material';
import Mainlogo from '../../assets/img/mainlogo.png';
import {
  Navstyle,
  NavbarBlock,
  Line,
  Imgstyle,
  Loginstyle,
  LoginAvatar,
  LoginStatus,
} from './NavStyle';
import { logout } from '../../store/AuthSlice';

function Nav() {
  const isLogin = useSelector(state => state.user.authenticated);
  const userImg = useSelector(state => state.user.userImg);
  const userId = useSelector(state => state.user.userSeq);
  const dispatch = useDispatch();
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
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box gridColumn="span 1" />
          <Box grid-column="span 1">
            {!isLogin ? (
              <Loginstyle to="/Login">Login</Loginstyle>
            ) : (
              <LoginStatus>
                <LoginAvatar to={`/profile/${userId}`}>
                  <Avatar src={userImg} />
                </LoginAvatar>
                <Loginstyle
                  to="/Main"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
                </Loginstyle>
              </LoginStatus>
            )}
          </Box>
          {/* </NavbarBlock> */}
        </Box>
      </NavbarBlock>
      <Line />
    </>
  );
}

export default Nav;
