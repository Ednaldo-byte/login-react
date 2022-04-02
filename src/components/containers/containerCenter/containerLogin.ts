import styled from "styled-components";
import login from "../../../assets/login.jpg"

export const ContainerCenter = styled.div`
    width: 100rem;
    height: 60rem;
    margin: auto;
    border-radius: 15px;
    overflow: hidden;
  
    display: flex;
  
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.062),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.066),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.068),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.069),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.07),
    100px 100px 80px rgba(0, 0, 0, 0.07)
  ;

  .forms{
    width: 60%;
    height: 100%;
    background: white;
    // border-left: #071e22 10px solid;
    padding: 0 5rem;

    display: flex;
    flex-direction: column;
  }

  h1{
    font-size: 5rem;
    margin: 3rem 0;
  }

  @media (max-width: 1100px){
    width: 80vw;
    // height: 60rem;
  }
  @media (max-width: 750px){
    .forms{
      width: 100%;
    }
    h1{
      font-size: 4rem;
    }
  }
`