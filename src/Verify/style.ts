import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;

  img {
    margin-top: 1.5rem;
  }

  button {
    margin-top: 1.5rem;
    width: 20%;
    height: 2rem;
    border: 0;
    border-radius: 0.3rem;
    background: #2A31D3;
    color: #fff;
    font-weight: 500;
    font-size: 0.7rem;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

  div {
    margin: auto;

    &.top-text {
      margin-top: 3rem;
      text-align: center;
      width: 17rem;
    }

    &.body-text {
      margin-top: 1.5rem;
      width: 32rem;
    }

    &.bottom-text {
      margin-top: 1.5rem;
      text-decoration: underline;
      color: #1F4AE4;
    }
  }

`