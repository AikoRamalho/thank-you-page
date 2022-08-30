import styled from "styled-components";

export const Container = styled.div`
  div {
    &.logo-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
    &.footer-logo {
      background: #FFFFFF;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      width: 186px;
    }

    &.footer-text {
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;
    }
  }

  p {
    &.copyright{
      display: flex;
      justify-content: center;
      margin-top: 0.7rem;
    }
  }
`