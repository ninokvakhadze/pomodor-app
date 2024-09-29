import { createGlobalStyle } from "styled-components";
import {useState, } from "react"
import ChooseTimer  from "./chooseTimer";
import Timer from "./Timer";

function App() {
  const [timer, setTimer] = useState<number>(5)
  
  return (
    <>
      <GlobalStyles />
      <ChooseTimer />
      <Timer setTimer={setTimer} timer={timer}/>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');  
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #1E213F;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }
  `;
