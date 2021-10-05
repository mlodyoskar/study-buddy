import React from 'react';
import { Wrapper } from 'components/atoms/Average/Average.styles';

const Average = ({ average }) => <Wrapper average={average}>{average}</Wrapper>;

export default Average;
