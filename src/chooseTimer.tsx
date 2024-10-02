import styled from "styled-components";

interface TimerTypes {
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const ChooseTimer: React.FC<TimerTypes> = ({ setTimer }) => {
  return (
    <HeadMain>
      <Title>Pomodoro</Title>
      <SetTimeDiv>
        <TimeTitleDiv>
          <TimeTitle
            onClick={() => {
              setTimer(1500);
            }}
          >
            pomodoro
          </TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle
            onClick={() => {
              setTimer(5);
            }}
          >
            short break
          </TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle
            onClick={() => {
              setTimer(600);
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
const Title = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
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
const TimeTitle = styled.h2`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.88px;
  text-align: center;
  opacity: 0.4;
`;
