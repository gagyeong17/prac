import React, {useState} from 'react'
import styled from "styled-components"
import { useHistory } from 'react-router-dom'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firestore, firebaseApp, db } from '../shared/firebase';

const Post = () => {
const history = useHistory();

 const [lecture, setLecture] = useState("")
 const [type,setType] = useState("")
 const [num, setNum] = useState("")
 const [name, setName] = useState("")

  const submit = () => {
    const data = {
      lecture: lecture,
      type: type,
      num: num,
      name: name,
    }

    if (lecture === '' || type === '' || num === '' || name === '') {
      window.alert('빈칸을 입력해주세요!')
      return;
    }
  else {
      db.collection("lecture").add({ ...data })
        .then((doc) => {
          window.alert('등록완료')
          history.push('/lectureTable')
          console.log(doc)
        }).catch((err) =>
        window.alert('다시 시도해주세요')
        )
    }

  }

return (
    <React.Fragment>
        <TableBox>
            <TableRow>
                <Ttitle>강의</Ttitle>
                <InputStyle onChange={(e) => { setLecture(e.target.value)}}/>
            </TableRow>
            <TableRow>
                <Ttitle>최대 입장 인원 수</Ttitle>
                <InputStyle type="number" min="0" onChange={(e) => {setNum(e.target.value)}}/>
            </TableRow>
            <TableRow>
                <Ttitle>유형</Ttitle>
                <InputStyle onChange={(e) => { setType(e.target.value)}}/>
            </TableRow>
            <TableRow>
                <Ttitle>생성자</Ttitle>
                <InputStyle onChange={(e) => { setName(e.target.value)}}/>
            </TableRow>
            <BtnDiv><Btn onClick={submit}>등록하기</Btn></BtnDiv>
            
            </TableBox>
    </React.Fragment>
)}

const TableBox = styled.div`
width: 350px;
margin: auto;
padding-top : 30px;
`
const TableRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row:;
`

const Ttitle = styled.div`
width: 170px;
height: 30px;
display: flex;
justify-content: left;
align-items: center;
font-weight:700;
`

const InputStyle = styled.input`
border: none;
border-bottom: 1px solid #BCBBEF;
width: 250px;
`

const BtnDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`
const Btn = styled.div`
width: 221px;
height: 40px;
border: 1px solid #616Ac5;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export default Post