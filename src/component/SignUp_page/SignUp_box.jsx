import React from "react";
import SignUp_signInAria from "./SignUp_signInAria";
import SignUp_info_box from "./SignUp_info_box";

import * as S from "./SignUp_style";

function SignUp_box() {
  return (
    <S.SignUp_box>
      <SignUp_signInAria/>
      <SignUp_info_box/>
    </S.SignUp_box>
  );
}

export default SignUp_box;
