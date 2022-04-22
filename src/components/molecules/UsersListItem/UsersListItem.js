import React, { useContext } from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import Student from 'components/atoms/Student/Student';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({
  userData: { name, average, attendance },
}) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <Average average={average} />
      <Student name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  )
};

UsersListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string,
    average: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
