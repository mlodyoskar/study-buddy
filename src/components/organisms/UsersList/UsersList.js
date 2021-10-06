import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import {
  Wrapper,
  StyledList,
} from 'components/organisms/UsersList/UsersList.styles';

const UsersList = () => {
  const [users, setUsers] = useState();
  const [isLoading, setLoadingState] = useState();

  useEffect(() => {}, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem
            deleteUser={deleteUser}
            index={i}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
