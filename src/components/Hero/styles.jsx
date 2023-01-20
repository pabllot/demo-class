import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: flex-start;
height: 170px;
width: 400px;
overflow: hidden;
border-radius: 5px;
background-color: #EAAC7F;

@media (max-width: 1100px) {
  width: 360px;
  height: 580px;
}

@media (max-width: 768px) {
  width: 50vw;
  border-radius: 0px;
  height: 70%;
}

@media (max-width: 660px) {
  width: 80vw;
  border-radius: 0px;
  height: 70%;
 
}

@media (max-width: 420px) {
  width: 100vw;
  border-radius: 0px;
  height: 70%;
}
`

export const Wrapper = styled.div`
height: 100%;
width: 100%;
display:flex;
align-items: center;
justify-content: center;
`
export const Title = styled.h1`
  font-size: 2rem;
  color: white;
`