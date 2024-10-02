import styled from "styled-components";
import Settings from "./settings";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import setting from "./assets/Shape 2.svg";
import { useState, useEffect } from "react";

interface TimerTypes {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer: React.FC<TimerTypes> = ({ setTimer, timer, start, setStart }) => {
  const [settings, setSettings] = useState(false);
  const [progress, setProgress] = useState<number>(100);
  const [defaultTimer, setDefault] = useState(timer);
  


  useEffect(() => {
    if (timer > 0 && start) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        const remainingTimeRatio = timer / defaultTimer;
        const calculatedProgress = remainingTimeRatio * 100;
        setProgress(calculatedProgress);
      }, 1000);

      return () => clearInterval(interval);
    }
    setStart(false);
  }, [timer, start]);

  const formatData = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Main>
      <CountdownTimercard>
        <CountDownTimer>
          <CircularProgressbar
            text={formatData(timer).toString()}
            value={progress}
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
          <Pause onClick={() => setStart(!start)}>
            {start ? "PAUSE" : "START"}
          </Pause>
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
