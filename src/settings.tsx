import styled from "styled-components";
import cancel from "./assets/Combined Shape.svg";
import choosen from "./assets/Path 2.svg";

interface SettingsTypes {
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsTypes> = ({ setSettings }) => {
  return (
    <>
      <MainDiv>
        <SettingsHead>
          <Title>Settings</Title>
          <img
            onClick={() => {
              setSettings(false);
            }}
            src={cancel}
          />
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
        <SecondTitle>COLOR</SecondTitle>
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
};
export default Settings;

const MainDiv = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
  margin: auto;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SettingsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
`;
const Title = styled.h2`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.8px;
  text-align: left;
`;
const SecondTitle = styled.h3`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 13.64px;
  letter-spacing: 4.230769157409668px;
  text-align: center;
  margin-top: 5px;
`;
const TimesDiv = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
const TimeType = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.88px;
  text-align: left;
  opacity: 0.4;
`;
const TimeTypeInput = styled.input`
  width: 140px;
  height: 40px;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.36px;
  text-align: left;
  padding: 5px;
  border: 2px solid #1E213F40;
  background-color: #eff1fa;
  border-radius: 10px;
`;
const FontsDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 100%;
`;
const FontDiv = styled.div`
  padding: 10px;
  background-color: #161932;
  border-radius: 20px;
`;
const FontName = styled.p`
  color: #ffff;
  font-family: "Kumbh Sans", sans-serif;
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
  padding: 10px;
  width: 140px;
  height: 53px;
  border-radius: 25px;
  border: none;
  background-color: #f87070;
  color: white;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.84px;
  text-align: center;
`;
