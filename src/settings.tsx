import styled from "styled-components";
import cancel from "./assets/Combined Shape.svg";
import choosen from "./assets/Path 2.svg";
import { useState, useEffect } from "react";

interface SettingsTypes {
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  setFont: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  color: string;
  font: string;
}

const Settings: React.FC<SettingsTypes> = ({
  setSettings,
  setPomodoro,
  setShortBreak,
  setLongBreak,
  setFont,
  setColor,
  pomodoro,
  shortBreak,
  longBreak,
  color,
  font,
}) => {
  const [applyPomodoro, setApplyPomodoro] = useState<number>(pomodoro);
  const [applyShortBreak, setApplyShortBreak] = useState<number>(shortBreak);
  const [applyLongBreak, setApplyLongBreak] = useState<number>(longBreak);
  const [applyColor, setApplyColor] = useState<string>(color);
  const [applyFont, setApplyFont] = useState<string>(font);


  useEffect(() => {
  
  }, []);

  const handleApply = () => {
    setPomodoro(applyPomodoro)
    setShortBreak(applyShortBreak)
    setLongBreak(applyLongBreak)
    setColor(applyColor)
    setFont(applyFont)
  }
  return (
    <MainDiv>
      <SettingsHead>
        <Title font={font}>Settings</Title>
        <img
          onClick={() => {
            setSettings(false);
          }}
          src={cancel}
        />
      </SettingsHead>
      <TimesDiv>
        <SecondTitle font={font}>TIME (MINUTES)</SecondTitle>
        <TimeTypeDiv>
          <TimeType font={font}>pomodoro</TimeType>
          <TimeTypeInput
            font={font}
            type="number"
            min="0"
            value={applyPomodoro}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setApplyPomodoro(event.target.value)
            }
          />
        </TimeTypeDiv>
        <TimeTypeDiv>
          <TimeType font={font}>short break</TimeType>
          <TimeTypeInput
            font={font}
            type="number"
            min="0"
            value={applyShortBreak}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setApplyShortBreak(event.target.value)
            }
          />
        </TimeTypeDiv>
        <TimeTypeDiv>
          <TimeType font={font}>long break</TimeType>
          <TimeTypeInput
            font={font}
            type="number"
            min="0"
            value={applyLongBreak}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setApplyLongBreak(event.target.value)
            }
          />
        </TimeTypeDiv>
      </TimesDiv>
      <SecondTitle font={font}>Font</SecondTitle>
      <FontsDiv>
        <FontDiv>
          <FontName
            font={`"Kumbh Sans", sans-serif`}
            onClick={() => {
              setApplyFont(`"Kumbh Sans", sans-serif`);
            }}
          >
            Aa
          </FontName>
        </FontDiv>
        <FontDiv>
          <FontName
            font={`"Roboto Slab", serif`}
            onClick={() => {
              setApplyFont(`"Roboto Slab", serif`);
            }}
          >
            Aa
          </FontName>
        </FontDiv>
        <FontDiv>
          <FontName
            font={`"Space Mono", monospace`}
            onClick={() => {
              setApplyFont(`"Space Mono", monospace`);
            }}
          >
            Aa
          </FontName>
        </FontDiv>
      </FontsDiv>
      <SecondTitle font={font}>COLOR</SecondTitle>
      <ColorsDiv>
        <Color
          onClick={() => {
            setApplyColor("#F87070");
          }}
          bgColor="#F87070"
        >
          {applyColor == "#F87070" ? <img src={choosen} /> : null}
        </Color>
        <Color
          onClick={() => {
            setApplyColor("#70F3F8");
          }}
          bgColor="#70F3F8"
        >
          {applyColor == "#70F3F8" ? <img src={choosen} /> : null}
        </Color>
        <Color
          onClick={() => {
            setApplyColor("#D881F8");
          }}
          bgColor="#D881F8"
        >
          {applyColor == "#D881F8" ? <img src={choosen} /> : null}
        </Color>
      </ColorsDiv>
      <Button font={font} onClick={handleApply}>Apply</Button>
    </MainDiv>
  );
};
export default Settings;

const MainDiv = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
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
const Title = styled.h2<{ font: string }>`
  font-family: ${(props) => props.font};
  font-size: 20px;
  font-weight: 700;
  line-height: 24.8px;
  text-align: left;
`;
const SecondTitle = styled.h3<{ font: string }>`
  font-family: ${(props) => props.font};
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
const TimeType = styled.p<{ font: string }>`
  font-family: ${(props) => props.font};
  font-size: 12px;
  font-weight: 700;
  line-height: 14.88px;
  text-align: left;
  opacity: 0.4;
`;
const TimeTypeInput = styled.input<{ font: string }>`
  width: 140px;
  height: 40px;
  font-family: ${(props) => props.font};
  font-size: 14px;
  font-weight: 700;
  line-height: 17.36px;
  text-align: left;
  padding: 5px;
  border: 2px solid #1e213f40;
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
const FontName = styled.p<{ font: string }>`
  color: #ffff;
  font-family: ${(props) => props.font};
`;
const ColorsDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Color = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button<{ font: string }>`
  padding: 10px;
  width: 140px;
  height: 53px;
  border-radius: 25px;
  border: none;
  background-color: #f87070;
  color: white;
  font-family: ${(props) => props.font};
  font-size: 16px;
  font-weight: 700;
  line-height: 19.84px;
  text-align: center;
  margin-bottom: -20px;
`;
