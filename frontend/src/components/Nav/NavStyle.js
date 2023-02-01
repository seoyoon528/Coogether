import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarBlock = styled.div`
  display: flex;
  /* padding: 1rem; */
  width: 768px;
  margin-top: 0.7rem;
  /* margin-bottom: 1.5rem; */
  margin-left: 5.5rem;
  @media screen and (max-width: 1180px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const Navstyle = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-top: 1.5rem;
  margin-left: 4rem;
  padding-bottom: 1.5rem;
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
`;

export const Imgstyle = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 2rem;
  padding-left: 2rem;
  @media screen and (max-width: 1180px) {
    padding-right: 2rem;
  }
`;

export const Loginstyle = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  margin-top: 1.5rem;
  padding-left: 92rem;
  padding-bottom: 1.5rem;
  display: flex;
  color: #444444;
  @media screen and (max-width: 1180px) {
    padding-left: 44rem;
  }
  @media screen and (max-width: 940px) {
    padding-left: 4rem;
  }

  &:hover {
    display: flex;
  }
`;
