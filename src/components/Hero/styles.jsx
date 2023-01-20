import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: flex-start;
height: 160px;
width: 400px;
overflow: hidden;
border-radius: 5px;
background-color: #0A2647;

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