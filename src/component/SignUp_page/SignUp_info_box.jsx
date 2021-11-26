import React from "react";

import IDSVG from "../../assets/ID.svg";
import PASSWORD from "../../assets/PASSWORD.svg";
import NAME from "../../assets/NAME.svg";
import CALENDAR from "../../assets/CALENDAR.svg";
import NICKNAME from "../../assets/NICKNAME.svg";

import * as S from "./SignUp_style";

function SignUp_info_box() {
  return (
    <S.SignUp_box_info_box>
      <S.SignUp_box_info_box_title>회원가입</S.SignUp_box_info_box_title>
      <S.SignUp_box_info_box_Explanation>
        개인 회원 정보 기입페이지
      </S.SignUp_box_info_box_Explanation>
      <S.SignUp_box_info_box_Explanation_line width="260px" mar_b="25px"/>
      <S.display_flex>
        <S.SignUp_box_info_box_input1
          percent="0px"
          imgsrc={IDSVG}
          placeholder="아이디"
        />
        <S.SignUp_box_info_box_input1
          percent="20px"
          imgsrc={PASSWORD}
          placeholder="비밀번호"
        />
      </S.display_flex>
      <S.SignUp_box_info_box_input2
        percent="0px"
        imgsrc={NAME}
        placeholder="이름"
      />
      <S.SignUp_box_info_box_input2
        percent="0px"
        imgsrc={NICKNAME}
        placeholder="별명"
      />
      <S.SignUp_box_info_box_input2
        percent="0px"
        imgsrc={CALENDAR}
        placeholder="생년월일 ex) xxxx-xx-xx"
      />
      <S.SignUp_box_info_box_Teacher>혹시 <S.color color="rgba(73, 147, 250, 1)">선생님</S.color>이신가요?</S.SignUp_box_info_box_Teacher>
      <S.SignUp_box_info_box_Explanation_line width="220px" mar_b="0px" />
      <S.SignUp_box_info_SignUpButton>다음으로</S.SignUp_box_info_SignUpButton>
    </S.SignUp_box_info_box>
  );
}

export default SignUp_info_box;
