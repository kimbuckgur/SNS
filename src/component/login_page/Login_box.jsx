import React, { useState } from "react";
import Login_box_SignUp from "./Login_box_SignUp";
import Login_box_Info from "./Login_box_Info";

import * as S from "./login_style";

function Login_box() {
  
  return (
    <S.login_box>
      <Login_box_SignUp/>
      <Login_box_Info/>
    </S.login_box>
  );
}

export default Login_box;
