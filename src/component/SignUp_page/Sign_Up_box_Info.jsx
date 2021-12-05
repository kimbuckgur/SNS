import React,{useState} from "react";
import * as S from "./SignUp_style";

import NAME from "../../assets/NAME.svg";
import CALENDAR from "../../assets/CALENDAR.svg";
import NICKNAME from "../../assets/NICKNAME.svg";

function Sign_Up_box_Info({ SignUpInfo, setSignUpInfo }) {
  const [TANDF,setTANDF] = useState(true);

  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({ ...SignUpInfo, [name]: value });
  };

  const changeGender = ()=>{
    let copySignUpInfo = {...SignUpInfo}
    setTANDF(!TANDF);
    if(TANDF == true){
      copySignUpInfo.gender = "MEN";
    }
    else{
      copySignUpInfo.gender = "WOMEN";
    }
    setSignUpInfo(copySignUpInfo);
    console.log(SignUpInfo)
  }
  return (
    <S.SignUp_box_info_box>
      <S.SignUp_box_info_box_title>회원가입</S.SignUp_box_info_box_title>
      <S.SignUp_box_info_box_Explanation>
        개인 정보 기입페이지
      </S.SignUp_box_info_box_Explanation>
      <S.SignUp_box_info_box_Explanation_line percent="205px" />
      <S.display_flex>
        <S.SignUp_box_info_box_input1
          name="name"
          percent="0px"
          imgsrc={NAME}
          placeholder="이름"
          onChange={onChangeInfo}
        />
        <S.SignUp_box_info_box_input1
          name="nickname"
          percent="20px"
          imgsrc={NICKNAME}
          placeholder="별명"
          onChange={onChangeInfo}
        />
      </S.display_flex>
      <S.display_flex>
        <S.SignUp_box_info_box_input3
          name="grade"
          percent="0px"
          placeholder="학년"
          onChange={onChangeInfo}
          onInput={(e)=>e.target.value = e.target.value.replace(/[^1-3.]/g, '').replace(/(\..*)\./g, '$1')}
          maxLength="1"
        />
        <S.SignUp_box_info_box_input3
          name="classNum"
          percent="20px"
          placeholder="반"
          onChange={onChangeInfo}
          onInput={(e)=>e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}
          maxLength="2"
        />
        <S.SignUp_box_info_box_input3
          name="number"
          percent="20px"
          placeholder="번호"
          onChange={onChangeInfo}
          onInput={(e)=>e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}
          maxLength="2"
        />
      </S.display_flex>
      <S.display_flex>
        <S.SignUp_box_info_box_input2
          name="birth"
          percent="0px"
          imgsrc={CALENDAR}
          placeholder="생년월일 ex) xxxx-xx-xx"
          onInput={(e)=>e.target.value = e.target.value.replace(/[^0-9.-]/g, '')}
          onChange={onChangeInfo}
          maxLength="10"
        /> 
        {TANDF ? <S.SignUp_box_info_box_genderON onClick={changeGender}>남자</S.SignUp_box_info_box_genderON> : <S.SignUp_box_info_box_genderOFF onClick={changeGender}>남자</S.SignUp_box_info_box_genderOFF>}
        {TANDF ?  <S.SignUp_box_info_box_genderOFF onClick={changeGender}>여자</S.SignUp_box_info_box_genderOFF> : <S.SignUp_box_info_box_genderON onClick={changeGender}>여자</S.SignUp_box_info_box_genderON>}
      </S.display_flex>
      <S.SignUp_box_info_box_Teacher>
        혹시 <S.color color="rgba(73, 147, 250, 1)">선생님</S.color>이신가요?
      </S.SignUp_box_info_box_Teacher>
      <S.SignUp_box_info_box_Explanation_line percent="220px" />
      <S.SignUp_box_info_SignUpButton>다음으로</S.SignUp_box_info_SignUpButton>
    </S.SignUp_box_info_box>
  );
}

export default Sign_Up_box_Info;
