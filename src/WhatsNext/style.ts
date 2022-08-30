import styled from "styled-components";

export const Container = styled.div`
  div {
    &.card {
      background: #FFFFFF;
      box-shadow: 0px 0px 16px rgba(8, 15, 52, 0.16);
      border-radius: 16px;
      padding: 1rem;

      p {
        &.card-text {
          font-weight: 450;
          font-size: 14px;
          margin-top: 20px;
          width: 319px;
          margin-left: 30px;
        }
      }
    }
    
    &.section-title{
      font-weight: 700;
      font-size: 24px;
      color: #141986;
      margin-top: 5rem;
      margin-left: 2rem;
    }

    header {
      display: flex;
      align-items: flex-end;
      span{
        &.card-title{
          font-weight: 500;
          font-size: 18px;
          margin-left: 0.4rem;
        }
      }
    }

    &.card-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 1.5rem 2rem;
    }
  }
`