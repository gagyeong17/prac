import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firestore, firebaseApp, db } from '../shared/firebase'

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

import * as xlsx from 'xlsx';

import List from "../components/lecture/List"

function LectureTable() {
  const history = useHistory();

    const [list, setList] = useState()

    // console.log(list)

    useEffect(() => {
      let data = [];
      db.collection('lecture') //조회할 collection 넣어준다.
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              data = [...data, { ...doc.data() }];
              setList(data)
              // console.log(data)
            }
          })
        }).catch((err) => {
          console.log(err)
        });
  }, [])

//엑셀
  const excelDownload = (columns) => {    
    const ws = xlsx.utils.json_to_sheet(columns);   
    const wb = xlsx.utils.book_new();     
              xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');    
              xlsx.writeFile(wb, `test.xlsx`);  };
          
  return (
    <React.Fragment>
        <PostWrapper>
          <Title>강의 </Title>
          <Title>최대 입장 인원 수 </Title>
          <Title>유형 </Title>
          <Title>생성자 </Title>
     </PostWrapper>
        
       <div>
          {list && list.map((item, idx) => {
            return <List key={idx} item={item} />
          })}
        </div>
      
<BtnDiv>
  <Btn onClick={()=>{history.push('/lecture')}}>등록하러가기</Btn><Btn className='excel-btn' onClick={()=> excelDownload(list)}>   엑셀 다운로드 </Btn>
</BtnDiv>

<Lecture>
<table id="orderlist" border="1">
      <thead>
        <th>강사명</th>
        <th width="100">이메일</th>
        <th>핸드폰 번호</th>
        <th>은행명</th>
        <th>계좌번호</th>
      </thead>
      <tbody>
        <tr>
          <td>쥬디</td>
          <td>judy@supporti.com</td>
          <td>010-1234-1234</td>
          <td>한국</td>
          <td>123-45678-90</td>
        </tr>
        <tr>
          <td>리아</td>
          <td>lia@supporti.com</td>
          <td>010-1234-1234</td>
          <td>한국</td>
          <td>123-45678-90</td>
        </tr>
      </tbody>
    </table>

    
</Lecture>



    </React.Fragment>
  );
}

const PostWrapper = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 45px;
  font-size: 12px;
  border-bottom: 1px solid #cccccc;
  color: #333333;
  margin: auto;
`;

const Title = styled.div`
display: flex;
align-items: center;
justify-content : center;
  cursor: pointer;
  width: 100px;
font-weight: 700;
`;


const BtnDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 50px 0px;
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

const Lecture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  font-size: 12px;
  color: #333333;
  margin: auto;
  border: 1px solid red;
`;
export default LectureTable;