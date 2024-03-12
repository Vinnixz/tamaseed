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

export const Instruction = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  width: 100%;
  height: 16vh;
  padding: 2vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-bottom: 2vh;
  font-weight: bold;
  font-size: 24px;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  text-align: justify;
  justify-content: center;
p{
  font-size: 1rem;
  justify-content: center;
  text-align: center;
}
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

export const Orientação = styled.div`
  display: flex;
  padding: 2vh;
  font-weight: bold;
`;

export const Instruction1 = styled.div`
  display: flex;
  margin-top: 2vh;
  padding: 1vh;
  gap: 2vw;
  font-style: italic;
  svg {
    width: 4rem;
    height: 4rem;
  }
`;

export const NextButton = styled.button`
  display: grid;
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding-top: 0.5rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3vh;
  transition: background-color 0.5s ease;
  position: absolute;
  right: 5.4375rem;
  top: 45.9375rem;
`;
