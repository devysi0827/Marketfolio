import styled from "styled-components";
import Bono from "./bo.png";
// import Bono from "./Hello Bitches Bonobono Food Jjamppong Film PNG - Free Download.jpeg";

function App() {
  return (
    <Main>
      <img src={Bono} height={200} width={400} />
      <p>효매 바보</p>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 900;
  font-size: 100px;
  color: white;
  gap: 40px;

  p {
    z-index: 100;
    -webkit-text-stroke: 4px black;
  }

  background: linear-gradient(
    135deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
`;

export default App;
