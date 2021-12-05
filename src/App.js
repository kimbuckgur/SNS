import React,{useState} from "react";

import Search_PAS_main from "./component/Search_PAS_page/Search_PAS_main"
import Login_main from "./component/login_page/Login_main";
import SignUP_main from "./component/SignUp_page/SignUp_main";
import SignUp_main2 from "./component/SignUp_page2/SignUp_main2";


import "./App.css";

function App() {
  const [SignUpInfo, setSignUpInfo] = useState({
    birth: "2021-01-01",
    classNum: 0,
    gender: "MEN",
    grade: 0,
    id: "string",
    name: "string",
    nickName: "string",
    number: 0,
    password: "string",
  });

  return (
    <div className="App">
      <Search_PAS_main/>
      {/* <Login_main/> */}
      {/* <SignUP_main SignUpInfo={SignUpInfo} setSignUpInfo={setSignUpInfo}/> */}
      {/* <SignUp_main2 SignUpInfo={SignUpInfo} setSignUpInfo={setSignUpInfo}/> */}
    </div>
  );
}

export default App;
