import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 60px 0;
  background-color: ${(props) => props.theme?.backgroundColor};
  color: ${(props) => props.theme?.textColor};
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 20px;

  img {
    width: 100%;
  }
`;
