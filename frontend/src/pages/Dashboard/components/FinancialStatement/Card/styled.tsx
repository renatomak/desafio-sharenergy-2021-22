import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px auto;
  background-color: rgba(0, 0, 0, 0.2);
  width: 95%;
  padding: 20px;
  border-radius: 10px;
  color: var(--gray);
`;
export const DivCustomer = styled.div`
    display: flex;
    flex-direction: column;

    #percentage {
        color: var(--secondary-color);
        font-weight: 700;
    }
`;
