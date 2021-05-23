import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.indigo[8]};
  &:hover {
    background: ${palette.indigo[6]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
