import { styled } from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: auto;
  height: 100vh;
  background-color: #2f973a;
  font-family: "Madimi One", sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 67%;
  }
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`;


