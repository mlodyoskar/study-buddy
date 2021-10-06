import React from 'react';
import propTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import Student from 'components/atoms/Student/Student';

const UsersListItem = ({
  deleteUser,
  userData: { name, average, attendance },
}) => (
  <Wrapper>
    <Average average={average} />
    <Student name={name} attendance={attendance} />
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string,
    average: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
