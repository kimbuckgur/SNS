import React from "react";
import SignUp_box from "./SignUp_box";
import * as S from "./SignUp_style";

function Login_main() {
  return (
    <S.Sign_page>
      <S.Sign_page_onetriangle>
        <svg
          width="223"
          height="393"
          viewBox="0 0 223 393"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3664 390.829C7.55265 394.699 -0.0810363 389.783 1.03658 382.89L78.878 -97.2674C79.8007 -102.959 86.2586 -105.835 91.1062 -102.713L418.187 107.911C423.035 111.033 423.088 118.102 418.289 121.297L13.3664 390.829Z"
            fill="#4993FA"
          />
        </svg>
      </S.Sign_page_onetriangle>
      <SignUp_box />
      <S.Sign_page_twotriangle>
        <svg
          width="243"
          height="277"
          viewBox="0 0 243 277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M230.798 1.42308C236.432 -1.82156 243.378 2.65129 242.755 9.1222L202.64 425.697C202.066 431.66 195.383 434.9 190.346 431.656L-132.188 223.96C-137.224 220.717 -137.04 213.292 -131.849 210.302L230.798 1.42308Z"
            fill="#72ADFF"
          />
        </svg>
      </S.Sign_page_twotriangle>
    </S.Sign_page>
  );
}

export default Login_main;
