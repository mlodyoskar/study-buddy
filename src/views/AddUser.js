import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';

const AddUser = ({ handleAddUser, formValues, handleInputChnage }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <Title>Add new student</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChnage} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChnage} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChnage} />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

export default AddUser;
