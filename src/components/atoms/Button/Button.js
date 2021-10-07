import styled from 'styled-components';

const Button = styled.button`
  padding: 7px 20px;
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export default Button;
