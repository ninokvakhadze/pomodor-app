import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import ChooseTimer from "./chooseTimer";
import Timer from "./Timer";
import setting from "./assets/Shape 2.svg";
import Settings from "./settings";
import styled from "styled-components";

function App() {
  const [settings, setSettings] = useState(false);
  const [timer, setTimer] = useState<number>(25);
  const [start, setStart] = useState<boolean>(false);
  const [defaultTimer, setDefault] = useState(25);
  const [progress, setProgress] = useState<number>(100);
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(10);
  const [color, setColor] = useState<string>("#F87070");
  const [font, setFont] = useState<string>(`"Kumbh Sans", sans-serif`);



  return (
    <>
      <GlobalStyles />
      {settings ? null : (
        <>
          <ChooseTimer
            setTimer={setTimer}
            setDefault={setDefault}
            setProgress={setProgress}
            setStart={setStart} font={font}
            pomodoro={pomodoro}
            shortBreak={shortBreak}
            longBreak={longBreak}
          />
          <Timer
            setProgress={setProgress}
            progress={progress}
            setTimer={setTimer}
            timer={timer}
            start={start}
            setStart={setStart}
            defaultTimer={defaultTimer}
            color={color}
          />
          <Setting
            onClick={() => {
              setSettings(!settings);
            }}
            src={setting}
          />
        </>
      )}
      {settings ? (
        <Settings
          setSettings={setSettings}
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
          setFont={setFont}
          setColor={setColor}
          pomodoro={pomodoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          color={color}
          font={font}
        />
      ) : null}
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
  }

  #root{
     display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  `;

const Setting = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
`;
