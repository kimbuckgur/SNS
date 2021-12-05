import React, { useState } from "react";

import EMAIL from "../../assets/EMAIL.svg";
import PASSWORD from "../../assets/PASSWORD.svg";
import CHECK from "../../assets/CHECK.svg";

import * as S from "./Search_PAS_styled";
import axios from "axios";

function Search_PAS_box() {
  const [Email, setEmail] = useState("");

  const [SearchIdInfo, setSearhIdInfo] = useState({
    password: "",
  });

  const cendCode = () => {
    axios.post("http://49.247.195.161:8080/api/auth/password", null, {
      params: {
        email: Email,
      },
    });
  };

  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setSearhIdInfo({ ...SearchIdInfo, [name]: value });
  };
  return (
    <S.Search_PAS_box>
      <S.Search_PAS_box_title>비밀번호 찾기</S.Search_PAS_box_title>
      <S.Search_PAS_box_text>
        이메일 인증 후 비밀번호 재설정하기
      </S.Search_PAS_box_text>
      <S.display_flex>
        <S.Search_PAS_box_input
          type="email"
          width="480px"
          name="email"
          percent="55px"
          placeholder="이메일"
          imgsrc={EMAIL}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(Email);
          }}
        ></S.Search_PAS_box_input>
        <S.Search_PAS_box_button percent="55px" onClick={cendCode}>
          인증하기
        </S.Search_PAS_box_button>
      </S.display_flex>
      <S.Search_PAS_box_input
        width="625px"
        percent="30px"
        placeholder="받은 코드"
        imgsrc={CHECK}
      ></S.Search_PAS_box_input>
      <S.Search_PAS_box_input
        width="625px"
        percent="30px"
        placeholder="새로운 비밀번호"
        imgsrc={PASSWORD}
      ></S.Search_PAS_box_input>
      <S.Search_PAS_box_END>
        <S.color color="rgba(73, 147, 250, 1)">비밀번호</S.color> 설정
      </S.Search_PAS_box_END>
    </S.Search_PAS_box>
  );
}

export default Search_PAS_box;
