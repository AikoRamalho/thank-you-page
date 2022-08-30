import styled from "styled-components";

export const Container = styled.header`
  border: 1px solid #DBDBDB;
`

export const Content = styled.header`
  max-width: 1440px;
  max-height: 85px;
  margin: 0 auto;

  padding: 0.5rem 3rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;

    a {
      color: #312E2E;
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 450;

      img {
        padding: 0 0.5rem;
        width: 2rem;
      }
    }
  }

  

`