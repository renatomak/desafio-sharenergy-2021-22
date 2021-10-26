import styled from "styled-components";

export const Button = styled.button`
  border-radius: 30px;
  background-color: var(--primary-color);
  font-size: 12px;
  line-height: 27px;
  color: var(--white);
  border: none;
  text-align: center;
  padding: 0;

  &.btn-lg {
    width: 150px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  &.btn-lg:hover {
    background-color: rgb(9, 145, 145);
  }

  &#btn-mobile {
    display: none;
  }
  &.btn-main {
    margin-top: 20px;
    margin-right: 6px !important;
    margin-left: 6px !important;
    line-height: 43px;
    min-width: 200px;
    width: 270px;
    height: 47px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
  }
  &.btn-main:hover {
    transform: scale(1.1);
    background-color: white;
    color: var(--gray);
    box-shadow: inset 0 3px 5px rgb(0, 0, 0, 13%);
  }
`;
