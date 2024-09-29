import styled from "styled-components";
import Settings from "./settings";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import setting from "./assets/Shape 2.svg";
import { useState, useEffect } from "react";

interface TimerTypes {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
}

const Timer: React.FC<TimerTypes> = ({ setTimer, timer }) => {
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1); // Decrement the timer every second
    }, 1000);
    
    // Cleanup: clear the interval when the component unmounts or the effect re-runs
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(timer == 0 ){
      clearInterval(timer);
    }
    console.log(timer)

  }, [timer]);

  return (
    <Main>
      <CountdownTimercard>
        <CountDownTimer>
          <CircularProgressbar
            text={timer}
            value={100}
            strokeWidth={4}
            styles={{
              path: { stroke: "red" },
              trail: { stroke: "#161932" },
              text: {
                fontSize: "33px",
                fontWeight: 700,
                lineHeight: "99px",
                letterSpacing: "-2px",
                textAlign: "center",
                width: "147px",
                height: "80px",
                color: "#ffffff",
              },
            }}
          />
          <Pause>PAUSE</Pause>
        </CountDownTimer>
      </CountdownTimercard>
      <Setting
        onClick={() => {
          setSettings(!settings);
        }}
        src={setting}
      />
      {settings ? <Settings setSettings={setSettings} /> : null}
    </Main>
  );
};

export default Timer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CountdownTimercard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(320deg, #2e325a 0%, #0e112a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  box-shadow: 50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a;
  padding: 20px;
  position: relative;
`;
const CountDownTimer = styled.div``;

const Pause = styled.p`
  /* font-family: ${(props) => props.fontapply}; */
  position: absolute;
  top: 200px;
  left: 100px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 13.125px;
  text-align: left;
  color: #d7e0ff;
  cursor: pointer;
  &:hover {
    /* color: ${(props) => props.changecolor}; */
  }
`;

const Setting = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
`;
