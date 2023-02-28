import React from "react";
import { ThemeProps } from "./../../theme";
import {
  FooterContainer,
  ContactContainer,
  ContactItem,
  SocialMediaContainer,
  SocialMediaLink,
} from "./styles";

type ContactInfo = {
  icon: JSX.Element;
  text: string;
};

type SocialMediaLink = {
  icon: JSX.Element;
  url: string;
};

type FooterProps = {
  contactInfo: ContactInfo[];
  socialMediaLinks: SocialMediaLink[];
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme?: ThemeProps;
  backgroundColor?: string;
};

const Footer: React.FC<FooterProps> = ({
  contactInfo,
  socialMediaLinks,
  isDarkMode,
  toggleTheme,
  theme,
  backgroundColor,
}) => {
  return (
    <FooterContainer
      background-color={backgroundColor}
      color={theme?.textColor}
    >
      <ContactContainer>
        <h4>Contato</h4>
        {contactInfo.map((item, index) => (
          <ContactItem key={index}>
            {item.icon}
            <span>{item.text}</span>
          </ContactItem>
        ))}
      </ContactContainer>

      <SocialMediaContainer>
        <ul>
          {socialMediaLinks.map((link, index) => (
            <SocialMediaLink key={index} href={link.url} target="_blank">
              {link.icon}
            </SocialMediaLink>
          ))}
        </ul>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
