import React from "react";
import Login_box from "./Login_box";
import * as S from "./login_style";

function Login_main() {
  return (
    <S.login_page>
      <S.login_page_onesurcle>
        <svg
          width="458"
          height="326"
          viewBox="0 0 458 326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="260.399" cy="65.6001" r="260" fill="#72ADFF" />
        </svg>
      </S.login_page_onesurcle>
      <Login_box />
      <S.login_page_twosurcle>
        <svg
          width="349"
          height="432"
          viewBox="0 0 349 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="108.8" cy="240" r="240" fill="#C8DFFF" />
        </svg>
      </S.login_page_twosurcle>
    </S.login_page>
  );
}

export default Login_main;
