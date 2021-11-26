import React, { useState } from "react";
import Login_box_SignUpAria from "./Login_box_SignUpAria";
import Login_box_InfoAria from "./Login_box_InfoAria";

import * as S from "./login_style";

function Login_box() {
  return (
    <S.login_box>
      <Login_box_SignUpAria />
      <Login_box_InfoAria />
    </S.login_box>
  );
}

export default Login_box;
