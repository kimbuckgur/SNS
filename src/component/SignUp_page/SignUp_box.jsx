import React, { useState } from "react";
import Sign_Up_box_SignIn from "./Sign_Up_box_SignIn";
import Sign_Up_box_Info from "./Sign_Up_box_Info";

import * as S from "./SignUp_style";

function SignUp_box({SignUpInfo,setSignUpInfo}) {
  return (
    <S.SignUp_box>
      <Sign_Up_box_SignIn />
      <Sign_Up_box_Info SignUpInfo={SignUpInfo} setSignUpInfo={setSignUpInfo}/>
    </S.SignUp_box>
  );
}

export default SignUp_box;
