import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin: 15px;
  }

  label {
    font-size: 3rem;
    margin: 30px;
    color: var(--primary-color);

    span {
      background-color: var(--white);
      padding: 20px;
      box-shadow: inset 0 0 1em var(--secondary-light-color),
        0 0 1em var(--primary-color);
      border-radius: 20px;
      font-weight: 700;
      font-size: 2rem;
    }
  }
`;
export const SpanUser = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  margin: 30px;
  color: var(--primary-color);

  span {
    background-color: var(--white);
    padding: 20px;
    box-shadow: inset 0 0 1em var(--secondary-light-color),
      0 0 1em var(--primary-color);
    border-radius: 20px;
    font-weight: 700;
    font-size: 2rem;
    color: var(--secondary-color);
  }

  div {
      display: flex;
      align-items: center;
      justify-content: center;
  }
`;

export const ContainerSelectCustomer = styled.div`
    select {
        all: unset;
        text-align: right;
        font-size: 3rem;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--primary-color);
        font-weight: 700;
        width: 500px;
        cursor: pointer;
        margin-right: 30px;
    }
`;
