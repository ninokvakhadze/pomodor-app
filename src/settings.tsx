import styled from "styled-components";
import cancel from "./assets/Combined Shape.svg";
import choosen from "./assets/Path 2.svg";

export default function Settings() {
  return (
    <>
      <MainDiv>
        <SettingsHead>
          <Title>Settings</Title>
          <img src={cancel} />
        </SettingsHead>
        <TimesDiv>
          <SecondTitle>TIME (MINUTES)</SecondTitle>
          <TimeTypeDiv>
            <TimeType>pomodoro</TimeType>
            <TimeTypeInput type="number" min="0" />
          </TimeTypeDiv>
          <TimeTypeDiv>
            <TimeType>short break</TimeType>
            <TimeTypeInput type="number" min="0" />
          </TimeTypeDiv>
          <TimeTypeDiv>
            <TimeType>long break</TimeType>
            <TimeTypeInput type="number" min="0" />
          </TimeTypeDiv>
        </TimesDiv>
        <SecondTitle>Font</SecondTitle>
        <FontsDiv>
          <FontDiv>
            <FontName>Aa</FontName>
          </FontDiv>
          <FontDiv>
            <FontName>Aa</FontName>
          </FontDiv>
          <FontDiv>
            <FontName>Aa</FontName>
          </FontDiv>
        </FontsDiv>
        <SecondTitle>Color</SecondTitle>
        <ColorsDiv>
          <Color>
            <img src={choosen} />
          </Color>
          <Color>
            <img src={choosen} />
          </Color>
          <Color>
            <img src={choosen} />
          </Color>
        </ColorsDiv>
        <Button>Apply</Button>
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div`
  background-color: white;
  width: 100%;
  /* height: 100%; */
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SettingsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px;
`;
const Title = styled.h2`
font-family: Kumbh Sans;
font-size: 20px;
font-weight: 700;
line-height: 24.8px;
text-align: left;
`;
const SecondTitle = styled.h3``;
const TimesDiv = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
const TimeTypeDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const TimeType = styled.p``;
const TimeTypeInput = styled.input`
  width: 140px;
  height: 40px;
`;
const FontsDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const FontDiv = styled.div`
  padding: 10px;
  background-color: #161932;
  border-radius: 20px;
`;
const FontName = styled.p`
  color: #ffff;
`;
const ColorsDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Color = styled.div`
  background-color: #f87070;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin: 20px;
  margin-bottom: -20px;
  width: 140px;
  height: 53px;
  border-radius: 25px;
  border: none;
  background-color: #f87070;
  color: white;
  font-family: Kumbh Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.84px;
  text-align: center;
`;
