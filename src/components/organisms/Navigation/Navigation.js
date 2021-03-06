import React from 'react';
import {
  Wrapper,
  Logo,
  StyledLink,
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/">Dashboard</StyledLink>
      <StyledLink exact to="/add-user">Add user</StyledLink>
      {/* <StyledLink to="/settings">Settings</StyledLink> */}
      {/* <StyledLink to="/logout">Logout</StyledLink> */}
    </Wrapper>
  );
};

export default Navigation;
