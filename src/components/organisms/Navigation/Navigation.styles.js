import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link'
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: end;
  margin: 15px 20px 15px auto;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
    &::after {
      content: '';
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      position: absolute;
      width: 15px;
      height: 3px;
      top: 50%;
      right: -20px;
      background-color: ${({ theme }) => theme.colors.darkPurple};
      transform: translateY(-50%);
  }
`;
