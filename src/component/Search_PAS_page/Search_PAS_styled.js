import styled from "styled-components";

export const color = styled.span`
  color: ${(props) => props.color};
`;

export const display_flex = styled.div`
  display: flex;
`;

export const Sign_page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sign_page_oneCube = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const Search_PAS_box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;
  width: 1120px;
  height: 630px;

  overflow-x: hidden;
  background: #ffffff;
  box-shadow: 0px 7.00111px 21.0033px rgba(0, 0, 0, 0.15);
  border-radius: 14.0022px;
`;

export const Sign_page_twoCube = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const Search_PAS_box_title = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(73, 147, 250, 1);

  margin: 0px;
  margin-top: 70px;
`;

export const Search_PAS_box_text = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(88, 88, 88, 1);

  margin: 0px;
  margin-top: 20px;
`;

export const Search_PAS_box_input = styled.input`
  margin-top: ${(props) => props.percent};
  padding: 0px;
  padding-left: 20px;
  width: ${(props) => props.width};
  height: 55px;

  display: flex;
  align-items: center;

  &::-webkit-input-placeholder {
    background-image: url(${(props) => props.imgsrc});
    background-repeat: no-repeat;
    background-position: 0 center;
    background-size: auto;
    padding: 3px 5%;
  }

  background-color: rgba(242, 242, 242, 1);
  border: none;
  border-radius: 4.50056px;
  &:focus {
    outline: none;
  }
`;

export const Search_PAS_box_button = styled.div`
  cursor: pointer;

  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  font-feature-settings: "pnum" on, "onum" on;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 55px;

  background-color: rgba(114, 173, 255, 1);
  border-radius: 4.50056px;

  margin-top: ${(props) => props.percent};
  margin-left: 20px;
`;

export const Search_PAS_box_END = styled.div`
  cursor: pointer;

  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 26px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(88, 88, 88, 1);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 3.84px 12.8px rgba(0, 0, 0, 0.15);
  border-radius: 128px;

  margin-top: 65px;
`;
