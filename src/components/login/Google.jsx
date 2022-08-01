import React from 'react'
import styled from 'styled-components';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';


const Google = () => {

  return (
    <React.Fragment>
      
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_REST_API_KEY}>
        <GoogleLogin
          buttonText="google login"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            localStorage.setItem("name", "김가경");
            window.alert("로그인 성공")
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}




const Btn = styled.div`
width: 420px;
height: 53px;
margin-top : 20px;
border: 1px solid #DBDBDB;
background-color: #fff;
color: #000;
font-weight: 700;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export default Google