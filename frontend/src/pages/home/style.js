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
  gap: 7vh;
  margin-top: 3rem;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  background-color: white;
  height: 40px;
  border-radius:8px;
input{
  border:none;
  border-left: 1px solid #2f973a;;
  margin-left:10px;
  height: 20px;
  outline: none;
}
::placeholder{
  padding-left: 1rem;
}
svg{
  color:#2f973a;;
  margin-left:15px;
  height:30px;
}
;
`
export const FormComponent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const TitleSearch = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
h1{
  font-size: 1rem;
}
`;