import axios from "axios";
import React, { useState } from "react";
import ID from "../../assets/ID.svg";
import PASSWORD from "../../assets/PASSWORD.svg";

import * as S from "./login_style";

function Login_box_InfoAria() {
  const [Login, setLogin] = useState({
    id: "",
    password: "",
  });

  const postLogin = () => {
    axios.post("http://3.36.108.34:8080", Login).then((res) => {
      console.log(res);
    });
  };
  const onChangeId = (e) => {
    let copyLogin = { ...Login };
    copyLogin.id = e.target.value;
    setLogin(copyLogin);
  };
  const onChangePas = (e) => {
    let copyLogin = { ...Login };
    copyLogin.password = e.target.value;
    setLogin(copyLogin);
  };
  return (
    <S.login_box_info_box>
      <S.login_box_info_box_title>로그인</S.login_box_info_box_title>
      <S.login_box_info_socialLogin_aria>
        <S.login_box_info_socialLogin_Google />
        <S.login_box_info_socialLogin_Kakao />
        <S.login_box_info_socialLogin_Naver />
      </S.login_box_info_socialLogin_aria>
      <S.login_box_info_socialLogin_name>
        소셜 로그인
      </S.login_box_info_socialLogin_name>
      <S.login_box_info_box_input
        imgsrc={ID}
        placeholder="아이디"
        percent="0px"
        onChange={onChangeId}
      />
      <S.login_box_info_box_input
        type="password"
        imgsrc={PASSWORD}
        placeholder="비밀번호"
        percent="30px"
        onChange={onChangePas}
      />
      <S.login_box_info_Search_Paswword>
        비밀번호를 잊으셨나요?
      </S.login_box_info_Search_Paswword>
      <S.login_box_info_Search_Paswword_line />
      <S.login_box_info_LoginButton onClick={postLogin}>
        로그인
      </S.login_box_info_LoginButton>
    </S.login_box_info_box>
  );
}

export default Login_box_InfoAria;
