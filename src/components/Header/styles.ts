import styled from "styled-components";

export const LogoContainer = styled.div`
  background-color: ${(props) => props.theme?.backgroundColor};
  color: ${(props) => props.theme?.textColor};
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  border-bottom: 1px solid ${(props) => props.theme?.textColor};
`;

export const LogoImage = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme?.textColor};
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bold;

  a {
    color: ${(props) => props.theme?.textColor};
    text-decoration: none;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme?.backgroundColor};
      background-color: ${(props) => props.theme?.textColor};
      border-radius: 0.5rem;
    }
  }
`;
