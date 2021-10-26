import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  font-weight: 400;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
export const ALink = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: var(--gray);

  #logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export const UlMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0;
  gap: 0.5rem;
  align-items: center;
  
  a {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    
  }
  a:hover {
    color: black;
    opacity: 1;
    background-color: transparent;
  }
  li {
    padding-right: 20px;
  }
`;
