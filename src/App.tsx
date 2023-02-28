import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "styles";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import {
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Footer from "components/Footer";
import About from "components/About";
import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const contactInfo = [
    { icon: <FaMobileAlt />, text: "51-985862294" },
    { icon: <FaEnvelope />, text: "pauloricardo.godoy@yahoo.com.br" },
  ];

  const socialMediaLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/paulo.godoy.948" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/paulo-ricardo-p-godoy-06577333",
    },
    { icon: <FaInstagram />, url: "https://www.instagram.com/paulogodoy948" },
    {
      icon: <FaGithubSquare />,
      url: "https://github.com/paulo-godoy?tab=repositories",
    },
    { icon: <FaWhatsappSquare />, url: "https://wa.me/5551985862294?" },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <AppWrapper>
        <Header
          title="Portfólio Paulo Godoy"
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          contactInfo={contactInfo}
          socialMediaLinks={socialMediaLinks}
        />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
