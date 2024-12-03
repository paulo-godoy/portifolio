import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import {
  LogoContainer,
  Title,
  ToggleButton,
  MenuItems,
  MenuItem,
} from "./styles";
import { ThemeProps } from "./../../theme";

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
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Cursos", link: "/courses" },
    { label: "Projetos", link: "/projects" },
    { label: "Currículo", link: "/imagens/curriculo/paulo_CV_863.pdf" },
  ];

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

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

      {isMobile && (
        <ToggleButton onClick={handleMenuClick}>
          <FaBars color={theme?.textColor} />
        </ToggleButton>
      )}

      {!isMobile && (
        <MenuItems>
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              <a href={item.link}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuItems>
      )}

      {isMobile && showMenu && (
        <MenuItems open={showMenu}>
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              <a href={item.link}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuItems>
      )}
    </LogoContainer>
  );
};

export default Header;
