import axios from "axios";
import React, { useState } from "react";
import ID from "../../assets/ID.svg";
import PAS from "../../assets/PASSWORD.svg";

import * as S from "./login_style";

function Login_box_info() {
  const [login_info, setLogin_info] = useState({
    id: "",
    password: "",
  });

  const postLoginInfo = () => {
    axios.post("", login_info).then((res) => {});
  };

  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setLogin_info({ ...login_info, [name]: value });
  };

  return (
    <S.login_box_info_box>
      <S.login_box_info_box_title>로그인</S.login_box_info_box_title>
      <S.login_box_info_input
        placeholder="아이디"
        imgsrc={ID}
        percent="35px"
        name="id"
        onChange={onChangeInfo}
      />
      <S.login_box_info_input
        placeholder="비밀번호"
        imgsrc={PAS}
        percent="30px"
        type="password"
        name="password"
        onChange={onChangeInfo}
      />
      <S.login_box_info_Search_Paswword>
        <S.color color="rgba(114, 173, 255, 1)">비밀번호</S.color>를 잊으셨나요?
      </S.login_box_info_Search_Paswword>
      <S.login_box_info_Search_Paswword_line />
      <S.login_box_info_LoginButton>로그인</S.login_box_info_LoginButton>
    </S.login_box_info_box>
  );
}

export default Login_box_info;
