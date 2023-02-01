import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AuthSlice';

function RedirectPage() {
  // 쿼리스트링으로부터 토큰을 얻음
  const searchParams = useLocation();
  const history = useHistory();
  const tokenStart = searchParams?.search.indexOf('=');
  const getToken = searchParams?.search?.slice(tokenStart + 1);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user);

  useEffect(() => {
    if (getToken) {
      dispatch(
        login({ ...isLogin, authenticated: true, accessToken: getToken })
      );
    } // 토큰이 없는 경우 에러 처리 추후 수정하기
    history.push('/main');
  }, []);

  //   const token = searchParams.get('token');
  //   const dispatch = useDispatch();
  //   const history = useHistory();
  //   // 토큰이 있는 경우
  //   useEffect(() => {
  //     if (token) {
  //       dispatch(login({ authenticated: true, accessToken: token }));
  //     } // 토큰이 없는 경우 에러 처리 추후 수정하기
  //     dispatch(login({ authenticated: true, accessToken: 'wefwefwe' }));
  //     // history.push('/main');
  //   }, []);
  return <>Redirect....</>;
}
export default RedirectPage;
