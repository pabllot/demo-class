import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
height: 600px;
width: 440px;
border-top-right-radius: 10px;
overflow: hidden;
border-bottom-right-radius: 10px;


.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 440px;
  height: 600px;
  margin-inline: auto;    
  background: #000000e2;
}

.filter {
  height: 30px;
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}


button {
  background-color: #877d7dcc;
  border-radius: 5px;
  color: #ffececdf;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  outline-style: none;
  width: 50px;
  height: 20px;
}

.office {
  font-size: 13px;
  width: 70px;
}


.button:focus {
  background-color: #1d1a1a;
  color: white;
}

.button:active {
  background-color: #6a6969af;
  color: #ffffff;
}

.light {
  background-color: #e7e0e0;
}

.light button {
  color: #201f1fda;
  background-color: #a29b9b9b;
  
}

svg {
  color: #f6d33a;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.light svg {
  color: #061869
}

@media (max-width: 1100px) {
  width: 320px;
  height: 520px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  .filter {
    width: 90%;
  }

  .sidebar {
    height: 520px;
  }
}

@media (max-width: 768px) {
  width: 70vw;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  height: 70%;
  .filter {
    width: 100%;
    height: 8%;
  }
  .sidebar {
    width: 100vw;
    height: 100%;


  }
}

@media (max-width: 620px) {
  width: 100vw;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  height: 70%;
  .filter {
    width: 100%;
    height: 8%;
  }
  .sidebar {
    width: 80vw;
    height: 100%;


  }
}

@media (max-width: 450px) {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  height: 70%;
  .filter {
    width: 100%;
    height: 8%;
  }
  
  .sidebar {
    width: 100vw;
    height: 100%;

  }
}



`