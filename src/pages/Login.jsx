import React from "react";
import styled from "styled-components";
import Kakao from "../components/login/Kakao"
import Google from "../components/login/Google"

const Login = () => {
    return ( 
    <React.Fragment>
        <LoginBox>
            <LoginInput placeholder="이메일 / 아이디"/>
            <LoginInput placeholder="비밀번호" type="password"/>
            <Btn>로그인</Btn>
            <Kakao/>
            <div style={{marginTop : "20px"}}>
                <Google /> 
            </div>
           
        </LoginBox>
    </React.Fragment>
)}

const LoginBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 20px;
`

const LoginInput = styled.input`
width: 420px;
height: 53px;
border: none;
border-bottom: 1px solid #A6ACBE;
`
const Btn = styled.div`
width: 420px;
height: 53px;
margin-top : 50px;
border: 1px solid #BCBBEF;
background-color: #F8F9FD;
color: #616AC5;
font-weight: 700;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export default Login;