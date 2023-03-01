import React from "react";
import { Link } from "react-router-dom";
import {
  LogoContainer,
  MenuItem,
  MenuItems,
  Title,
  ToggleButton,
} from "./styles";
import { ThemeProps } from "./../../theme";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaReact } from "react-icons/fa";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme?: ThemeProps;
  backgroundColor?: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleTheme,
  theme,
  backgroundColor,
  title,
}) => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Sobre", link: "/about" },
    { label: "Currículo", link: "#" },
  ];

  return (
    <LogoContainer background-color={backgroundColor} color={theme?.textColor}>
      <FaReact size={30} />
      <Title>{title}</Title>

      <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? (
          <FiSun color={theme?.textColor} />
        ) : (
          <FiMoon color={theme?.textColor} />
        )}
      </ToggleButton>

      <MenuItems>
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <a href={item.link}>{item.label}</a>
          </MenuItem>
        ))}
      </MenuItems>
    </LogoContainer>
  );
};

export default Header;
