import styled from "styled-components";


interface props{
  background: string
}

export const Image = styled.div.attrs((props: props) => ({
  background: props.background
}))`
  width: 40%;
  height: 100%;
  background: ${props => props.background};
  background-size: cover;
  @media (max-width: 750px){
    display: none
  }
`

  // url(${login}