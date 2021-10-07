import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/moleculs/UsersListItem/UsersListItem';
import {
  Wrapper,
  StyledList,
  StyledTitle,
} from 'components/organisms/UsersList/UsersList.styles';
import Button from 'components/atoms/Button/Button';
import FormField from 'components/moleculs/FormField/FormField';

const initialFormState = { name: '', attendance: '', average: '' };

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChnage = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChnage}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChnage}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChnage}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
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
    </>
  );
};

export default UsersList;
