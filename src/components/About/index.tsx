import React from "react";
import {
  AboutContainer,
  Container,
  ImageContainer,
  TextContainer,
} from "./styles";

const About: React.FC = () => {
  return (
    <AboutContainer id="sobre">
      <Container>
        <TextContainer>
          <h2>Um pouco sobre mim!</h2>
          <hr style={{ border: "1px solid #ccc" }} />
          <p>
            Sou o pai do Murilo e tenho 38 anos, possuo experiência de 10 anos
            com infraestrutura, estudo Análise e Desenvolvimento de sistemas no
            SENAC e estou procurando uma oportunidade para me desenvolver como
            programador Web.
          </p>
          <p>
            Meus hobbys são: levar meu filho na praça aos finais de semana e
            assistir filmes, series com minha esposa.
          </p>
          <p>Sou apaixonado por programação Web e afins das tecnologias.</p>
        </TextContainer>

        <ImageContainer>
          <img src="imagens/ora-sql-plsql.jpg" alt="Oracle SQL and PL/SQL" />
        </ImageContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;
