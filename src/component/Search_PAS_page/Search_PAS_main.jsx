import React from "react";
import Search_PAS_box from "./Search_PAS_box";

import * as S from "./Search_PAS_styled";

function Search_ID_main() {
  return (
    <S.Sign_page>
      <S.Sign_page_oneCube>
        <svg
          width="407"
          height="375"
          viewBox="0 0 407 375"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-5"
            y="34.4004"
            width="400"
            height="400"
            rx="16"
            transform="rotate(-30 -5 34.4004)"
            fill="#72ADFF"
          />
        </svg>
      </S.Sign_page_oneCube>
      <Search_PAS_box/>
      <S.Sign_page_twoCube>
        <svg
          width="414"
          height="427"
          viewBox="0 0 414 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-181.6"
            y="376.052"
            width="440"
            height="440"
            rx="16"
            transform="rotate(-60 -181.6 376.052)"
            fill="#72ADFF"
          />
        </svg>
      </S.Sign_page_twoCube>
    </S.Sign_page>
  );
}

export default Search_ID_main;
