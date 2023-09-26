import React from "react";
import { ThemeProps } from "../../theme";
import { Container, Title, Image, Subtitle, Text, Button } from "./styles";

interface AboutMeProps {
  theme?: ThemeProps;
}

const aboutMeData = {
  name: "Paulo Godoy",
  occupation: "Desenvolvedor Fron-End React",
  bio: "Sou apaixonado por tecnologia e gosto de criar soluções inovadoras para problemas reais. Além de programar, gosto de viajar, jogar futebol com filho e de fazer musculação.",
  imgUrl: "/imagens/perfil.jpeg",
  buttonLabel: "Conheça mais",
  buttonUrl: "https://www.linkedin.com/in/paulo-ricardo-godoy-react",
};

const PageHome = ({ theme }: AboutMeProps) => {
  return (
    <Container color={theme?.textColor}>
      <Image src={aboutMeData.imgUrl} alt="Foto de Perfil" />
      <Title>{aboutMeData.name}</Title>
      <Subtitle>{aboutMeData.occupation}</Subtitle>
      <Text>{aboutMeData.bio}</Text>
      <Button href={aboutMeData.buttonUrl}>{aboutMeData.buttonLabel}</Button>
    </Container>
  );
};

export default PageHome;
