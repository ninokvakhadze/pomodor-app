import styled from "styled-components";

interface TimerTypes {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setDefault: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  pomodoro: number,
  shortBreak: number,
  longBreak: number,
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  font: string
}

const ChooseTimer: React.FC<TimerTypes> = ({ setTimer, setDefault , setProgress, setStart, font, pomodoro, shortBreak, longBreak}) => {
  return (
    <HeadMain>
      <Title font={font}>Pomodoro</Title>
      <SetTimeDiv>
        <TimeTitleDiv>
          <TimeTitle
            onClick={() => {
              setTimer(pomodoro);
              setDefault(pomodoro);
              setProgress(100)
              setStart(false)
            }}
            font={font}
          >
            pomodoro
          </TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle
          font={font}
            onClick={() => {
              setTimer(shortBreak);
              setDefault(shortBreak);
              setProgress(100);
              setStart(false)
            }}
          >
            short break
          </TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle
          font={font}
            onClick={() => {
              setTimer(longBreak);
              setDefault(longBreak);
              setProgress(100);
              setStart(false);
            }}
          >
            long break
          </TimeTitle>
        </TimeTitleDiv>
      </SetTimeDiv>
    </HeadMain>
  );
};

export default ChooseTimer;

const HeadMain = styled.div``;
const Title = styled.h1<{ font: string }>`
  font-family: ${(props) => props.font};
  font-size: 24px;
  font-weight: 700;
  line-height: 29.77px;
  text-align: center;
  color: white;
`;
const SetTimeDiv = styled.div`
  display: flex;
  background-color: #161932;
  gap: 25px;
  padding: 7px;
  border-radius: 15px;
  margin-top: 20px;
`;
const TimeTitleDiv = styled.div`
  background-color: pink;
  padding: 10px;
  border-radius: 20px;
`;
const TimeTitle = styled.h2<{ font: string }>`
  font-family: ${(props) => props.font};
  font-size: 12px;
  font-weight: 700;
  line-height: 14.88px;
  text-align: center;
  opacity: 0.4;
`;
