import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import {
  Wrapper,
  StyledList,
} from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
