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
  background-color: ${({ average, theme }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average < 3) return theme.colors.error;
    return theme.colors.grey;
  }};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
