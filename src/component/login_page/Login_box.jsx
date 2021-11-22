import React from "react";
import * as S from "./login_style";

function Login_box() {
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
          <S.login_box_info_IdIcon>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.114 0C5.86781 0 0 5.88093 0 13.1271C0 20.3732 5.86781 26.2542 13.114 26.2542C20.3732 26.2542 26.2542 20.3732 26.2542 13.1271C26.2542 5.88093 20.3732 0 13.114 0ZM22.211 7.87625H18.3385C17.9185 6.23536 17.3146 4.66011 16.527 3.20301C18.9424 4.03001 20.9508 5.71028 22.211 7.87625ZM13.1271 2.67793C14.2166 4.25318 15.0699 5.99908 15.6344 7.87625H10.6198C11.1843 5.99908 12.0375 4.25318 13.1271 2.67793ZM2.96672 15.7525C2.75669 14.9124 2.62542 14.0329 2.62542 13.1271C2.62542 12.2213 2.75669 11.3418 2.96672 10.5017H7.40368C7.29866 11.3681 7.2199 12.2344 7.2199 13.1271C7.2199 14.0197 7.29866 14.8861 7.40368 15.7525H2.96672ZM4.04314 18.3779H7.91563C8.3357 20.0188 8.93954 21.5941 9.72717 23.0512C7.31179 22.2242 5.30334 20.557 4.04314 18.3779ZM7.91563 7.87625H4.04314C5.30334 5.69715 7.31179 4.03001 9.72717 3.20301C8.93954 4.66011 8.3357 6.23536 7.91563 7.87625ZM13.1271 23.5762C12.0375 22.001 11.1843 20.2551 10.6198 18.3779H15.6344C15.0699 20.2551 14.2166 22.001 13.1271 23.5762ZM16.1988 15.7525H10.0553C9.9372 14.8861 9.84531 14.0197 9.84531 13.1271C9.84531 12.2344 9.9372 11.3549 10.0553 10.5017H16.1988C16.317 11.3549 16.4089 12.2344 16.4089 13.1271C16.4089 14.0197 16.317 14.8861 16.1988 15.7525ZM16.527 23.0512C17.3146 21.5941 17.9185 20.0188 18.3385 18.3779H22.211C20.9508 20.5439 18.9424 22.2242 16.527 23.0512ZM18.8505 15.7525C18.9555 14.8861 19.0343 14.0197 19.0343 13.1271C19.0343 12.2344 18.9555 11.3681 18.8505 10.5017H23.2874C23.4975 11.3418 23.6287 12.2213 23.6287 13.1271C23.6287 14.0329 23.4975 14.9124 23.2874 15.7525H18.8505Z"
                fill="#929292"
              />
            </svg>
          </S.login_box_info_IdIcon>
          <S.login_box_info_IdInput />
        </S.login_box_info_IdBox>
        <S.login_box_info_PasswordInput></S.login_box_info_PasswordInput>
      </S.login_box_info_box>
    </S.login_box>
  );
}

export default Login_box;
