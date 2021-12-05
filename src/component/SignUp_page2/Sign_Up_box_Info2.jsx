import React, { useState } from "react";
import * as S from "./SignUp_style2";

import EMAIL from "../../assets/EMAIL.svg";
import CHECK from "../../assets/CHECK.svg";
import PASSWORD from "../../assets/PASSWORD.svg";
import axios from "axios";

function Sign_Up_box_Info({ SignUpInfo, setSignUpInfo }) {
  const baseURL = "http://49.247.195.161:8080/";

  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...SignUpInfo, [name]: value });
    console.log(SignUpInfo);
  };

  const EmailCheck = ()=>{
    axios.post(baseURL+"api/auth")
  }

  const SignUp = ()=>{
    axios.post(baseURL+"api/auth/signup",SignUpInfo).then((res)=>{
      console.log(res)
    })
  }

  return (
    <S.SignUp_box_info_box>
      <S.SignUp_box_info_box_title>회원가입</S.SignUp_box_info_box_title>
      <S.SignUp_box_info_box_Explanation>
        개인 정보 기입페이지
      </S.SignUp_box_info_box_Explanation>
      <S.SignUp_box_info_box_Explanation_line percent="205px" />
      <S.display_flex>
        <S.SignUp_box_info_box_input
          placeholder="이메일"
          imgsrc={EMAIL}
          name="id"
          onChange={onChangeInfo}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^a-z0-9@_.-]/gi, ""))
          }
          
        />
        <S.SignUp_box_info_box_button>인증하기</S.SignUp_box_info_box_button>
      </S.display_flex>
      <S.display_flex>
        <S.SignUp_box_info_box_input
          placeholder="이메일 확인"
          imgsrc={CHECK}
          percent="20px"
          maxLength="6"
        />
        <S.SignUp_box_info_box_button percent="20px">
          확인하기
        </S.SignUp_box_info_box_button>
      </S.display_flex>
      <S.SignUp_box_info_box_input_long
        percent="20px"
        placeholder="비밀번호"
        imgsrc={PASSWORD}
        name="password"
        onChange={onChangeInfo}
        onInput={(e) =>
          (e.target.value = e.target.value.replace(/[^a-z0-9@_.-]/gi, ""))
        }
      />
      <S.SignUp_box_info_box_Teacher>
        혹시 <S.color color="rgba(73, 147, 250, 1)">선생님</S.color>이신가요?
      </S.SignUp_box_info_box_Teacher>
      <S.SignUp_box_info_box_Explanation_line percent="220px" />
      <S.SignUp_box_info_SignUpButton onClick={SignUp}>가입하기</S.SignUp_box_info_SignUpButton>
    </S.SignUp_box_info_box>
  );
}

export default Sign_Up_box_Info;
