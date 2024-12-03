import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsCard,
  ProjectsDescription,
  ProjectsImage,
  ProjectsLinksContainer,
  ProjectsTitle,
  WrappersContainer,
} from "./styles";
import CalculatorApp from "../Calc"; // Importe o componente CalculatorApp

// Defina um tipo para um projeto
type Project = {
  title: string;
  description: string;
  imageUrl: string;
  component: React.ReactNode;
};

const PageProject: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Curso de Owasp",
      description:
        "O curso OWASP ensina boas práticas de segurança para desenvolvimento de software.",
      imageUrl: "https://source.unsplash.com/9KjXcN9Pn6g/500x300",
      component: <CalculatorApp />, // Componente que será renderizado
    },
    // Adicione mais projetos aqui, se necessário
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectsContainer>
      <h1>Meus projetos</h1>

      {selectedProject ? (
        <div>
          <button onClick={() => setSelectedProject(null)}>Fechar</button>
          {selectedProject.component} {/* Renderiza o componente selecionado */}
        </div>
      ) : (
        <WrappersContainer>
          {projects.map((project, index) => (
            <ProjectsCard key={index}>
              <ProjectsImage src={project.imageUrl} alt={project.title} />
              <ProjectsTitle>{project.title}</ProjectsTitle>
              <ProjectsDescription>{project.description}</ProjectsDescription>
              <ProjectsLinksContainer>
                <button onClick={() => openProjectDetails(project)}>
                  Abrir
                </button>
              </ProjectsLinksContainer>
            </ProjectsCard>
          ))}
        </WrappersContainer>
      )}
    </ProjectsContainer>
  );
};

export default PageProject;
