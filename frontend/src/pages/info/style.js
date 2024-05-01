import styled from "styled-components";

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  svg {
    color: #07730b;
  }
  h2 {
    text-align: center;
    font-size: 16px;
  }
  img {
    border-radius: 53%;
    width: 26%;
    height: 100px;
    margin: 1rem auto;
  }
`;
export const Info = styled.div`
  background-color: #f4f4f4;
  border-radius: 2rem 2rem 0 0;
  .slick-arrow.slick-next{
    display: none!important;
  }
`
export const InfoSeed = styled.div`
  padding: 1rem;
  h2 {
    text-align: center;
    margin: 1rem 1rem;
    color: var(--secondary-color);
  }
`;
