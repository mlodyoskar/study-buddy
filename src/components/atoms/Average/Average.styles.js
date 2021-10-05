import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.white};
  width: 34px;
  height: 34px;
  border-radius: 20px;
  background-color: ${({ average, theme }) =>
    average < 3
      ? theme.colors.error
      : average < 4
      ? theme.colors.warning
      : theme.colors.success};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
