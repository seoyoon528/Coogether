import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarBlock = styled.div`
  margin-top: 1rem;
`;

export const Navstyle = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-top: 1.5rem;
  margin-left: 3.5rem;
  margin-right: 2rem;
  padding-bottom: 2rem;
  display: flex;
  @media screen and (max-width: 1180px) {
    margin-left: 1.75rem;
  }

  &:hover {
    color: #febd2f;
  }

  &.active {
    font-weight: 600;
    border-bottom: 3.5px solid #febd2f;
    color: #febd2f;
    &:hover {
      color: #febd2f;
    }
  }

  & + & {
    margin-left: 4rem;
  }
`;

export const Line = styled.hr`
  margin: -1.5px;
  width: 100%;
  @media screen and (max-width: 1180px) {
    width: 100%;
  }
`;

export const Imgstyle = styled(NavLink)`
  margin-top: 0px;
  margin-bottom: 0px;
  /* padding-right: 1rem;
  padding-left: 1rem; */
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Loginstyle = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-top: 1.5rem;
  margin-left: 3.5rem;
  margin-right: 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  color: #444444;

  &:hover {
    display: flex;
  }
`;

export const LoginAvatar = styled(NavLink)`
  cursor: pointer;
  /* margin-top: 1.5rem;
  margin-left: 3.5rem;
  margin-right: 2rem;
  padding-bottom: 1.5rem; */

  display: flex;

  &:hover {
    display: flex;
  }
`;

export const LoginStatus = styled.div`
  display: flex;
`;
