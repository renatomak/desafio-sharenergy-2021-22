import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 15px;
  }

  label {
    font-size: 3rem;
    margin: 30px;
    color: var(--gray);
  }
`;
export const SpanCustomer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  margin: 30px;
  color: var(--primary-color);

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
    color: var(--gray);
    font-weight: 700;
    width: 500px;
    cursor: pointer;
    margin-right: 30px;
  }
`;

export const Span = styled.span`
  background-color: var(--white);
  box-shadow: inset 0 0 1em var(--secondary-light-color),
  0 0 1em var(--primary-color);
  border-radius: 20px;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 2rem;
  min-width: 300px;
  padding: 20px;
  text-align: center;

  &#income {
    background-color:  rgba(12, 231, 30, 0.349);
    box-shadow: inset 5px 10px 2em black,
  0 0 1em var(--primary-color);
  }
`;
