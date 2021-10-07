import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
  &:last-child {
    padding: 20px 0 0 0;
  }
  &:first-child {
    padding: 0 0 20px 0;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;
