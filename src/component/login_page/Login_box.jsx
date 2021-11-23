import React, { useState } from "react";
import * as S from "./login_style";

function Login_box() {
  const [idIcon_bool, setIdIcon_bool] = useState("true");

  const IdInput = (e) => {
    let value = e.target.value;
    setIdIcon_bool(!value);
  };
  return (
    <S.login_box>
      <S.login_box_sign_up>
        <S.login_box_sign_up_title>Hello, Friend!</S.login_box_sign_up_title>
        <S.login_box_sign_up_text>
          더 많은 컨텐츠를 즐기고 싶으시다면 회원 가입을 진행해 주세요.
        </S.login_box_sign_up_text>
        <S.login_box_sign_up_button>SIGN UP</S.login_box_sign_up_button>
      </S.login_box_sign_up>
      <S.login_box_info_box>
        <S.login_box_info_box_title>로그인</S.login_box_info_box_title>
        <S.login_box_info_socialLogin_aria>
          <S.login_box_info_socialLogin_Google />
          <S.login_box_info_socialLogin_Kakao />
          <S.login_box_info_socialLogin_Naver />
        </S.login_box_info_socialLogin_aria>
        <S.login_box_info_socialLogin_name>
          소셜 로그인
        </S.login_box_info_socialLogin_name>
        <S.login_box_info_IdBox>
          {idIcon_bool ? (
            <S.login_box_info_flex>
              <S.login_box_info_IdIcon>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1767 0.544434C5.37979 0.544434 0.685547 5.24918 0.685547 11.0461C0.685547 16.843 5.37979 21.5478 11.1767 21.5478C16.9841 21.5478 21.6889 16.843 21.6889 11.0461C21.6889 5.24918 16.9841 0.544434 11.1767 0.544434ZM18.4544 6.84543H15.3564C15.0203 5.53273 14.5372 4.27253 13.9071 3.10684C15.8395 3.76845 17.4462 5.11266 18.4544 6.84543ZM11.1872 2.68677C12.0589 3.94697 12.7415 5.3437 13.193 6.84543H9.1814C9.63297 5.3437 10.3156 3.94697 11.1872 2.68677ZM3.05892 13.1464C2.8909 12.4743 2.78588 11.7707 2.78588 11.0461C2.78588 10.3215 2.8909 9.61787 3.05892 8.94577H6.60849C6.52447 9.63888 6.46146 10.332 6.46146 11.0461C6.46146 11.7602 6.52447 12.4533 6.60849 13.1464H3.05892ZM3.92006 15.2468H7.01805C7.35411 16.5595 7.83718 17.8197 8.46728 18.9854C6.53498 18.3238 4.92822 16.99 3.92006 15.2468ZM7.01805 6.84543H3.92006C4.92822 5.10216 6.53498 3.76845 8.46728 3.10684C7.83718 4.27253 7.35411 5.53273 7.01805 6.84543ZM11.1872 19.4054C10.3156 18.1452 9.63297 16.7485 9.1814 15.2468H13.193C12.7415 16.7485 12.0589 18.1452 11.1872 19.4054ZM13.6446 13.1464H8.72982C8.63531 12.4533 8.5618 11.7602 8.5618 11.0461C8.5618 10.332 8.63531 9.62838 8.72982 8.94577H13.6446C13.7391 9.62838 13.8126 10.332 13.8126 11.0461C13.8126 11.7602 13.7391 12.4533 13.6446 13.1464ZM13.9071 18.9854C14.5372 17.8197 15.0203 16.5595 15.3564 15.2468H18.4544C17.4462 16.9795 15.8395 18.3238 13.9071 18.9854ZM15.7659 13.1464C15.85 12.4533 15.913 11.7602 15.913 11.0461C15.913 10.332 15.85 9.63888 15.7659 8.94577H19.3155C19.4835 9.61787 19.5885 10.3215 19.5885 11.0461C19.5885 11.7707 19.4835 12.4743 19.3155 13.1464H15.7659Z"
                    fill="#929292"
                  />
                </svg>
              </S.login_box_info_IdIcon>
              <S.login_box_info_IdPlaceholder>
                아이디
              </S.login_box_info_IdPlaceholder>
            </S.login_box_info_flex>
          ) : (
            <></>
          )}
          <S.login_box_info_IdInput onChange={IdInput} />
        </S.login_box_info_IdBox>
        
        <S.login_box_info_PasswordInput></S.login_box_info_PasswordInput>
        <S.login_box_info_Search_Paswword>비밀번호를 잊으셨나요?</S.login_box_info_Search_Paswword>
        <S.login_box_info_Search_Paswword_line/>
        <S.login_box_info_LoginButton>로그인</S.login_box_info_LoginButton>
      </S.login_box_info_box>
    </S.login_box>
  );
}

export default Login_box;
