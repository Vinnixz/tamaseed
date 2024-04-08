import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: auto;
  height: 100vh;
  background-color: #2f973a;
  font-family: 'Madimi One', sans-serif;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img{
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

export const Top = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
  width: 100%;
  height: 25vh;
`;

export const Formulario = styled.form`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const Input = styled.input`
border: none;
padding: 0.6rem;
outline: none;
::placeholder{
  padding-left: 1rem;
}
;
`
export const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: var(--primary-color);
  margin: 0.5rem 0;
`
export const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color);
  border-radius:6px;
  margin: 1rem 0;
  svg{
  color:#07730B;
  margin-left:15px;
  height:30px;
}
`;

export const TitleSearch = styled.div`
  display: flex;
  justify-content: center;
  h1{
    font-size: 1rem;
  }
`;
export const SeedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const SeedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(47, 151, 58, 0.1);
  gap: 1rem;
  padding: 1rem 0;
  border-radius: 10px;
`
export const SeedImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  img{
    width: 70%;
  
  }
`
export const SeedInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: black;
    font-size: 15px;
    text-transform: capitalize;
  }
  button{
    background-color: rgb(0, 128, 0);
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: white;
    padding: 0.3rem 1rem;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`
