import styled from "styled-components";

interface buttonProps {
  width?: string
}

export const Button = styled.button.attrs((props: buttonProps) => ({
  width: props.width
}))<buttonProps>`
  width: ${props => props.width};
  padding: 1.5rem;
  background: var(--green-myrtle);
  color: white;
  border: none;
  border-radius: 5px;
  margin: 1rem 0;
`