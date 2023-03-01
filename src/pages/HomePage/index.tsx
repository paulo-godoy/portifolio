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
      title: "Projeto 2",
      description: "Descrição do Projeto 2",
      imageUrl: "https://source.unsplash.com/4xmdT-iTzsM/500x300",
      sourceUrl: "#",
    },
    {
      title: "Projeto 3",
      description: "Descrição do Projeto 3",
      imageUrl: "https://source.unsplash.com/6l1v3I7MHYM/500x300",
      sourceUrl: "#",
    },
    {
      title: "Projeto 4",
      description: "Descrição do Projeto 4",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      sourceUrl: "#",
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
