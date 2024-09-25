import styled from "styled-components";

export default function ChooseTimer() {
  return (
    <HeadMain>
      <Title>Pomodoro</Title>
      <SetTimeDiv>
        <TimeTitleDiv>
          <TimeTitle>pomodoro</TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle>short break</TimeTitle>
        </TimeTitleDiv>
        <TimeTitleDiv>
          <TimeTitle>long break</TimeTitle>
        </TimeTitleDiv>
      </SetTimeDiv>
    </HeadMain>
  );
}

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
