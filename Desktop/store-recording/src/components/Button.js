import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize !important;
  font-size: 1.4rem;
  background: var(--mainWhite);
  border: 0.05rem solid var(--mainBlue);
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.2);
  color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  cursor:pointer;
  margin: 0.1rem 0.1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainDark);
    box-shadow: 14px 14px 10px 0px rgba(0,0,0,0.5);
  }
  &:focus {
    outline: none;
  }
`;