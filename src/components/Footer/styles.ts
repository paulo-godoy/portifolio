import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme?.backgroundColor};
  color: ${(props) => props.theme?.textColor};
  padding: 10px;
  border-top: 1px solid ${(props) => props.theme?.textColor};
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  svg {
    margin-right: 10px;
  }
`;

export const SocialMediaContainer = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const SocialMedia = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 50%;
  color: ${(props) => props.theme?.textColor};
  background-color: ${(props) => props.theme?.backgroundColor};
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme?.backgroundColor};
    color: ${(props) => props.theme?.textColor};
  }
`;
