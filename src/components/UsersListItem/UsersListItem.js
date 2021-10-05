import React from 'react';
import propTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string,
    average: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
