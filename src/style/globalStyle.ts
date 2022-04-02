import styled, { createGlobalStyle } from "styled-components";  

export const GlobalStyle = createGlobalStyle`

  :root{
    --dark-green: #071E22;
    --green-myrtle: #1D7874;
    --light-green: #679289;
    --peach: #F4C095;
    --red: #EE2E31;

    --gray: #a9a9a9;

    --gradient: linear-gradient(to top, #1D7874, #679289)
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body{
    width: 100%;
    height: 100vh;
  }
  .container{
    height: 100vh;
    background: var(--gradient);
    display: flex;
  }
  .sr-only {
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  a{
    font-size: 1.4rem;
    margin: .5rem 0;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`