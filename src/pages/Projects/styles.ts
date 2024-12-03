import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin: 40px 0;

  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    max-width: 1200px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      max-width: unset;
    }
  }
`;

export const ProjectsCard = styled.div`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 8px;
  background-color: #5d92b1;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 40px;
  }
`;

export const ProjectsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectsTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 20px;
`;

export const ProjectsDescription = styled.p`
  font-size: 18px;
  margin: 0 20px 20px 20px;
`;

export const ProjectsLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectsLink = styled.a`
  display: inline-block;
  background-color: #8ab6d6;
  color: ${(props) => props.theme?.textColor};
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e6d8e;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const WrappersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
`;
