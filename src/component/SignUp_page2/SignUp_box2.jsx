import React, { useState } from "react";
import Sign_Up_box_SignIn2 from "./Sign_Up_box_SignIn2";
import Sign_Up_box_Info2 from "./Sign_Up_box_Info2";

import * as S from "./SignUp_style2";

function SignUp_box({SignUpInfo,setSignUpInfo}) {
  return (
    <S.SignUp_box>
      <Sign_Up_box_SignIn2 />
      <Sign_Up_box_Info2 SignUpInfo={SignUpInfo} setSignUpInfo={setSignUpInfo}/>
    </S.SignUp_box>
  );
}

export default SignUp_box;
