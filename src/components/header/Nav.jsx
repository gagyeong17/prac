import React from 'react'
import styled from 'styled-components';


const Nav = () => {
  return (
    <React.Fragment>
    <Menu>
        <Btn>
            마이페이지
        </Btn>
        <MenuBtn>
            홈
        </MenuBtn>
        <MenuBtn>
            수강관리
        </MenuBtn>
        <MenuBtn>
            결제관리
        </MenuBtn>
        <MenuBtn>
            문의관리
        </MenuBtn>
        <MenuBtn>
            강의실
        </MenuBtn>
    </Menu>
   </React.Fragment>
  )
}

const Menu =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 255px;
height: 100vh;
background-color: #10123C;

@media all and (max-width: 500px) {
    display: none;
  }
`
const Btn = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
margin: 100px 30px 0px 30px;
gap: 5px;
width: 200px;
height: 60px;
color: #fff;
cursor: pointer;
font-weight: 700;
`
const MenuBtn = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 30px;
gap: 5px;
width: 200px;
height: 60px;
color: #fff;
cursor: pointer;
font-weight: 700;
`
export default Nav