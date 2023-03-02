import styled from "styled-components";

interface HeaderProps {
  backgroundColor?: string;
  open?: boolean; // adicionando a propriedade open ao HeaderProps
}

export const LogoContainer = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor};
  border-bottom: 1px solid ${(props) => props.theme?.textColor};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const ToggleButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme?.textColor};
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme?.primaryColor};
  }

  &:focus {
    outline: none;
  }
`;

export const MenuItems = styled.ul<HeaderProps>`
  display: flex;
  list-style: none;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: ${(props) => props.theme?.backgroundColor};
    height: ${(props) =>
      props.open
        ? "calc(100vh - 4rem)"
        : "0"}; // utilizando a propriedade open para definir o estilo
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

export const MenuItem = styled.li`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-top: 1px solid ${(props) => props.theme?.textColor};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme?.textColor};

    &:hover {
      color: ${(props) => props.theme?.primaryColor};
    }

    &:focus {
      outline: none;
    }
  }
`;
