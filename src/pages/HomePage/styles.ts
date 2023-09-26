import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: transparent;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  text-align: center;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme?.textColor};
  background-color: #5d92b1;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b637a;
  }
`;
