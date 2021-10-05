import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const Attendance = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
