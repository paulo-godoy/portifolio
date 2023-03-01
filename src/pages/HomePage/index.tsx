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
      title: "Projeto 1",
      description: "Descrição do Projeto 1",
      imageUrl: "https://source.unsplash.com/hxKPYbb0F0s/500x300",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Projeto 2",
      description: "Descrição do Projeto 2",
      imageUrl: "https://source.unsplash.com/4xmdT-iTzsM/500x300",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Projeto 3",
      description: "Descrição do Projeto 3",
      imageUrl: "https://source.unsplash.com/6l1v3I7MHYM/500x300",
      demoUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Projeto 4",
      description: "Descrição do Projeto 4",
      imageUrl: "https://source.unsplash.com/sY-uUGpYIvI/500x300",
      demoUrl: "#",
      sourceUrl: "#",
    },
  ];

  return (
    <HomeContainer>
      <h1>Meus projetos</h1>
      <WrapperContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinksContainer>
              <ProjectLink href={project.demoUrl} target="_blank">
                Demo
              </ProjectLink>
              <ProjectLink href={project.sourceUrl} target="_blank">
                Código Fonte
              </ProjectLink>
            </ProjectLinksContainer>
          </ProjectCard>
        ))}
      </WrapperContainer>
    </HomeContainer>
  );
};

export default PageHome;
