import styled from 'styled-components'

export const Input = styled.input`
width: 100%;
padding: 1.5rem .5rem;
border: 2px solid #a9a;
border-radius: 5px;
margin: 1rem 0;
color: var(--darkgreen);
font-size: 16px;
outline: none;
transition: 200ms;

&:focus{
  border-color: var(--green-myrtle); 
}
`