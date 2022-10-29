import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 1rem;
  background-color: #235bcf;
  box-shadow: 0 2px 12px 2px rgb(0 0 0 / 10%);
  color: white;
  position: fixed;
  top: 0;
`;
export const Content = styled.header`
  max-width: 1200px;
  width: 100%;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;

  a{
    transition: all 0.1s ease-in-out;
    text-decoration: underline transparent 2px;
    text-underline-offset: 4px;
    color: white;

    &:hover {
    text-decoration: underline var(--primary-color) 2px;
  }
  }
 
`;
