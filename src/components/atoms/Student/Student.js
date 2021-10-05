import React from 'react';
import {
  Wrapper,
  Name,
  Attendance,
} from 'components/atoms/Student/Student.styles';

const Student = ({ name, attendance }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Attendance>attendance: {attendance}</Attendance>
  </Wrapper>
);

export default Student;
