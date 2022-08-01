import React from 'react'
import styled from 'styled-components';

const Kakao = () => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <React.Fragment>
      <Button onClick={kakaoLogin}>
         카카오로 시작하기
      </Button>
    </React.Fragment>
  )
}

const Button = styled.div`
width: 420px;
height: 53px;
margin-top : 20px;
border: 1px solid #FEE500;
background-color: #FEE500;
color: #000;
font-weight: 700;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

export default Kakao