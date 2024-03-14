import { styled } from "styled-components";

export const Body = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(47, 151, 58, 0.2);
`;

export const Back = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  margin-top: 12vh;
  width: 80vw;
  height: 80vh;
  border-radius: 20px;
  box-shadow: 3px 10px 15px 1px grey;
`;

export const BackTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  width: 100%;
  height: 16vh;
  padding: 2vh;
`;