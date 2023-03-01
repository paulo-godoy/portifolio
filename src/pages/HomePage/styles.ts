import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const ProjectCard = styled.div`
  width: 300px;
  height: 400px;
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

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  margin: 0 20px 20px 20px;
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  background-color: #8ab6d6;
  color: ${(props) => props.theme?.textColor};
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3e6d8e;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
`;
