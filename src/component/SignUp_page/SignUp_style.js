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

export const Sign_page_onetriangle = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const SignUp_box = styled.div`
  display: flex;
  z-index: 2;
  width: 1120px;
  height: 630px;

  overflow-x: hidden;
  background: #ffffff;
  box-shadow: 0px 7.00111px 21.0033px rgba(0, 0, 0, 0.15);
  border-radius: 14.0022px;
`;

export const Sign_page_twotriangle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const SignUp_box_sign_in = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg width='351' height='631' viewBox='0 0 351 631' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1322_5457)'%3E%3Crect width='350.056' height='630.1' fill='%234993FA'/%3E%3Cpath d='M-169.93 141.278C-172.478 141.158 -174.047 138.441 -172.876 136.174L-60.2799 -81.7564C-59.0094 -84.2155 -55.5223 -84.2969 -54.1383 -81.8998L78.2967 147.484C79.6807 149.881 77.8666 152.861 75.1017 152.731L-169.93 141.278Z' fill='%2372ADFF'/%3E%3Crect x='228.937' y='120.517' width='35.0056' height='35.0056' rx='3.50056' transform='rotate(-40 228.937 120.517)' fill='%2372ADFF'/%3E%3Ccircle cx='21.2427' cy='584.132' r='140.022' transform='rotate(-20 21.2427 584.132)' fill='%2372ADFF'/%3E%3Crect x='211.434' y='480.053' width='28.0044' height='70.0111' rx='3.50056' transform='rotate(-20 211.434 480.053)' fill='%2372ADFF'/%3E%3Cpath d='M295.588 370.533C292.605 370.814 290.671 367.463 292.405 365.021L351.141 282.33C352.618 280.251 355.751 280.398 357.026 282.607L399.271 355.777C400.546 357.986 399.107 360.773 396.568 361.012L295.588 370.533Z' fill='%2372ADFF'/%3E%3Cpath d='M32.5826 27.856C33.9082 27.856 35.1338 28.1061 36.2593 28.6063C37.4098 29.1066 38.3978 29.8069 39.2232 30.7073C40.0486 31.6077 40.6863 32.6832 41.1366 33.9338C41.6118 35.1594 41.8494 36.4975 41.8494 37.9481C41.8494 39.3238 41.6368 40.6119 41.2116 41.8124C40.7864 42.988 40.1861 44.0009 39.4108 44.8513C38.6354 45.7267 37.71 46.4145 36.6345 46.9148C35.559 47.415 34.3709 47.6651 33.0703 47.6651H18.5137V41.7374H31.3821C32.0074 41.7374 32.6076 41.6623 33.1829 41.5123C33.7582 41.3622 34.2459 41.1371 34.6461 40.837C35.0713 40.5118 35.4089 40.1116 35.659 39.6364C35.9091 39.1612 36.0342 38.5984 36.0342 37.9481C36.0342 36.7226 35.634 35.7721 34.8337 35.0968C34.0333 34.4215 33.0328 34.0839 31.8323 34.0839H28.043C26.4423 34.0839 24.9916 33.9088 23.691 33.5586C22.3904 33.2085 21.2774 32.6582 20.352 31.9079C19.4516 31.1575 18.7513 30.1946 18.251 29.019C17.7508 27.8185 17.5007 26.3928 17.5007 24.7421C17.5007 23.5665 17.7008 22.441 18.101 21.3655C18.5011 20.265 19.0639 19.3021 19.7892 18.4767C20.5146 17.6513 21.39 16.9885 22.4154 16.4883C23.4409 15.988 24.5789 15.7379 25.8295 15.7379H39.0356V21.9658H28.2681C27.6679 21.9658 27.0926 22.0033 26.5423 22.0783C26.0171 22.1534 25.5544 22.3034 25.1542 22.5286C24.754 22.7286 24.4414 23.0288 24.2163 23.429C23.9912 23.8291 23.8786 24.3669 23.8786 25.0422C23.8786 25.8426 24.1412 26.5179 24.6665 27.0681C25.1917 27.5934 25.9171 27.856 26.8425 27.856H32.5826Z' fill='white'/%3E%3Crect x='46.8965' y='16' width='6.62069' height='32' fill='white'/%3E%3Crect x='62.3457' y='23.7241' width='6.62069' height='24.2759' fill='white'/%3E%3Cpath d='M85.839 32.6874C86.8527 32.6874 87.7899 32.8787 88.6506 33.2612C89.5304 33.6437 90.2859 34.1793 90.9171 34.8678C91.5483 35.5564 92.036 36.3788 92.3803 37.3351C92.7437 38.2723 92.9254 39.2956 92.9254 40.4049C92.9254 41.4569 92.7628 42.4419 92.4377 43.36C92.1125 44.2589 91.6535 45.0335 91.0605 45.6838C90.4676 46.3533 89.76 46.8792 88.9375 47.2618C88.1151 47.6443 87.2066 47.8356 86.212 47.8356H75.0804V43.3026H84.921C85.3991 43.3026 85.8582 43.2452 86.2981 43.1305C86.738 43.0157 87.1109 42.8436 87.417 42.614C87.7421 42.3654 88.0003 42.0594 88.1916 41.696C88.3828 41.3326 88.4785 40.9022 88.4785 40.4049C88.4785 39.4677 88.1725 38.7409 87.5604 38.2245C86.9484 37.7081 86.1833 37.4499 85.2652 37.4499H82.3676C81.1435 37.4499 80.0342 37.316 79.0396 37.0482C78.045 36.7805 77.1939 36.3597 76.4862 35.7859C75.7977 35.2121 75.2621 34.4757 74.8796 33.5768C74.4971 32.6587 74.3058 31.5685 74.3058 30.3062C74.3058 29.4072 74.4588 28.5465 74.7648 27.7241C75.0708 26.8825 75.5012 26.1462 76.0559 25.515C76.6105 24.8838 77.28 24.377 78.0641 23.9945C78.8483 23.6119 79.7186 23.4207 80.6749 23.4207H90.7737V28.1831H82.5397C82.0807 28.1831 81.6408 28.2118 81.22 28.2692C80.8183 28.3266 80.4645 28.4413 80.1585 28.6135C79.8525 28.7665 79.6134 28.996 79.4412 29.302C79.2691 29.6081 79.183 30.0193 79.183 30.5357C79.183 31.1477 79.3839 31.6642 79.7855 32.0849C80.1872 32.4866 80.7418 32.6874 81.4495 32.6874H85.839Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1322_5457'%3E%3Crect width='350.056' height='630.1' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  width: 350px;
  height: 630px;
  background-color: rgba(73, 147, 250, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUp_box_sign_in_title = styled.div`
  user-select: none;
  font-family: "Archivo", sans-serif;
  font-weight: bold;
  font-size: 40px;
  font-style: normal;
  color: white;
  margin-top: 190px;
`;

export const SignUp_box_sign_in_text = styled.div`
  user-select: none;
  width: 250px;
  height: 42.71px;
  margin-top: 10px;
  color: white;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 22px;
  text-align: center;
  font-feature-settings: "pnum" on, "onum" on;
`;

export const SignUp_box_sign_in_button = styled.button`
  cursor: pointer;
  font-family: "Archivo", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  color: white;

  width: 230px;
  height: 65px;
  margin-top: 80px;
  border: 1.4px solid white;
  border-radius: 100px;
  background-color: rgba(73, 147, 250, 1);
`;

export const SignUp_box_info_box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 770px;
  height: 630px;
`;

export const SignUp_box_info_box_title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "onum" on;
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
  color: rgba(73, 147, 250, 1);
  margin-top: 75px;
  margin-bottom: 20px;
`;

export const SignUp_box_info_box_Explanation = styled.p`
  margin: 0px;

  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 18px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(88, 88, 88, 1);
`;

export const SignUp_box_info_box_Explanation_line = styled.div`
  background-color: rgba(73, 147, 250, 1);
  width: ${(props) => props.percent};
  height: 1px;

  margin-top: 7px;
  margin-bottom: 35px;
`;

export const SignUp_box_info_box_input1 = styled.input`
  margin-left: ${(props) => props.percent};
  padding: 0px;
  padding-left: 20px;
  width: 260px;
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

export const SignUp_box_info_box_input2 = styled.input`
  margin-top: 20px;
  margin-left: ${(props) => props.percent};
  padding: 0px;
  padding-left: 20px;
  width: 320px;
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

export const SignUp_box_info_box_genderOFF = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(111, 111, 111, 1);

  width: 100px;
  height: 55px;
  margin-left: 20px;
  margin-top: 20px;

  border-radius: 5px;
  background-color: rgba(242, 242, 242, 1);
`;

export const SignUp_box_info_box_genderON = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  font-feature-settings: "pnum" on, "onum" on;
  color: white;

  width: 100px;
  height: 55px;
  margin-left: 20px;
  margin-top: 20px;

  border-radius: 5px;
  background-color: rgba(73, 147, 250, 1);
`;

export const SignUp_box_info_box_input3 = styled.input`
  margin-top: 20px;
  margin-left: ${(props) => props.percent};
  padding: 0px;
  padding-left: 20px;
  width: 160px;
  height: 55px;

  display: flex;
  align-items: center;

  background-color: rgba(242, 242, 242, 1);
  border: none;
  border-radius: 4.50056px;
  &:focus {
    outline: none;
  }
`;

export const SignUp_box_info_box_Teacher = styled.p`
  cursor: pointer;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19.6062px;
  line-height: 18px;
  font-feature-settings: "pnum" on, "onum" on;
  color: rgba(88, 88, 88, 1);

  margin: 0px;
  margin-top: 40px;
`;

export const SignUp_box_info_SignUpButton = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24.5039px;
  line-height: 18px;
  font-feature-settings: "pnum" on, "onum" on;

  border-radius: 1000px;
  background: rgba(73, 147, 250, 1);
  width: 280px;
  height: 70px;

  margin-top: 10px;
`;
