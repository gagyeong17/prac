import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileNav = () => {
    const [burger, setBurger] = React.useState(false);

  return (
    <React.Fragment>
        <NavBar>
            <MenuIcon 
            style={{color:"#000"}}
            onClick={() => {setBurger(true);}}/>
            {burger && (
             <Menu>
              <CloseBox>
                <CloseIcon 
                style={{cursor:"pointer"}}
                onClick={() => {setBurger(false);}}/>
              </CloseBox>
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
              )}
        </NavBar>
    </React.Fragment>
  )
}

const NavBar = styled.div`
width: 100vw;
height: 50px;
color: white;

display: flex;
align-items: center;
justify-content: left;
padding-left: 20px;;
`

const Menu =styled.div` 
position: absolute;
left: 0;
top: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 255px;
height: 100vh;
background-color: #10123C;
animation: modal-show 1s;
`

const CloseBox = styled.div`
width: 250px;
height: 50px;

display: flex;
align-items: center;
justify-content: right;
margin-right: 100px;
`

const Btn = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
margin: 50px 30px 0px 30px;
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
export default MobileNav