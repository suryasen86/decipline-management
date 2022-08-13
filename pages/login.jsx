import React, { useEffect, useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import InputPrimary from "../components/InputPrimary";
import "./../styles/login.module.scss";
import { toast } from 'react-toastify';
import {clearError,doLogin} from '../actions/loginAction'
import { useSelector, useDispatch } from "react-redux";
const login = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.userData);
  let {user,loading,isAuthenticated,errors}=state
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const HandleLogin = async()=>{
    if(userName.length <6 ){
      return toast.warn("user Name Length Must Be 6 Charecter")
    }
    if(password.length <6 ){
      return toast.warn("Password Length Must Be 6 Charecter")
    }
    await dispatch(doLogin({userName,password}))
  }
  return (
    <div className="d-flex justify-content-center align-items-center login-container my-5">
      <div>
      <h1 className="text-center">Login page</h1>
      <InputPrimary
        value={userName}
        handleChange={(e) => {
          setuserName(e.target.value);
        }}
        label={""}
        isInvalid={false}
        errors={""}
        className={""}
        name={"userName"}
        type={"text"}
        placeholder={"Enter User Name"}
      />
         <InputPrimary
        value={password}
        handleChange={(e) => {
          setpassword(e.target.value);
        }}
        label={""}
        isInvalid={false}
        errors={""}
        className={""}
        name={"password"}
        type={"password"}
        placeholder={"Enter Password"}
      />
      <ButtonPrimary className={"my-2"} btnText={"Login !"} clickHandler={HandleLogin}/>
      </div>
    
    </div>
  );
};

export default login;
