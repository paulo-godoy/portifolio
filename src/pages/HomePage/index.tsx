import React from "react";
import {
  HomeContainer,
  ProjectCard,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectLinksContainer,
  ProjectTitle,
  WrapperContainer,
} from "./styles";

const PageHome: React.FC = () => {
  const projects = [
    {
      title: "Curso de Owasp",
      description:
        "O curso OWASP ensina boas práticas de segurança para desenvolvimento de software.",
      imageUrl: "https://source.unsplash.com/9KjXcN9Pn6g/500x300",
      sourceUrl: "/imagens/certificados/Owasp.pdf",
    },
    {
      title: "Padrão de Verificação de Segurança de Aplicação",
      description: "V5 A V8",
      imageUrl: "https://source.unsplash.com/4xmdT-iTzsM/500x300",
      sourceUrl: "/imagens/certificados/v5-v8.pdf",
    },
    {
      title: "Padrão de Verificação de Segurança de Aplicação",
      description: "V9 A V14",
      imageUrl: "https://source.unsplash.com/6l1v3I7MHYM/500x300",
      sourceUrl: "/imagens/certificados/v9-v14.pdf",
    },
    {
      title: "Curso de React",
      description: "TypeScripe",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      sourceUrl: "/imagens/certificados/React-TypeScript.pdf",
    },
    {
      title: "Curso de Segurança da Aplicação",
      description: "Padrao verificacao de seguranca aplicacao",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      sourceUrl: "/imagens/certificados/seguranca-aplicacao.pdf",
    },
    {
      title: "Curso de NextJS",
      description: "NextJS",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      sourceUrl: "/imagens/certificados/NextJS.pdf",
    },
    {
      title: "Segurança",
      description: "Security Misconfiguration",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      sourceUrl: "/imagens/certificados/Security-Misconfiguration.pdf",
    },
  ];

  return (
    <HomeContainer>
      <h1>Meus cursos</h1>
      <WrapperContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinksContainer>
              <ProjectLink href={project.sourceUrl} target="_blank">
                Certificado
              </ProjectLink>
            </ProjectLinksContainer>
          </ProjectCard>
        ))}
      </WrapperContainer>
    </HomeContainer>
  );
};

export default PageHome;
