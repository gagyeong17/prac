import React from 'react'
import Modal from '../components/modal/Modal'
import AlertModal from '../components/modal/AlertModal'
import styled from 'styled-components';

import Post from "./Post"

const Lecture = () => {
   //모달
   const [modalOpen, setModalOpen] = React.useState(false);

   const closeModal = () => {
     setModalOpen(false);
   };
  return (
    <React.Fragment>
      <BtnDiv>
          <Btn   onClick={() => {setModalOpen(true);}}>강의 삭제하기</Btn>
      {modalOpen && (<Modal closModal={closeModal}>
                      <AlertModal closeModal={closeModal} />
                    </Modal>
                  )}
      </BtnDiv>
    
      <Category>
        <Title>
        카테고리
        </Title>
        <div>
          <Select name="category" form="myForm">
            <option value="select">카테고리 선택</option>
            <option value="korean">국어</option>
            <option value="english">영어</option>
            <option value="math">수학</option>
            <option value="exc">기타</option>
          </Select>
        </div>
      </Category>
      <Post/>
    </React.Fragment>
  )
}
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
const Category = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 20px;
`
const Title = styled.div`
width: 420px;
padding-bottom: 10px;
font-weight: 700;
`

const Select = styled.select`
width: 420px;
  height: 52px;
  padding: 10px 15px 10px 15px;
  border: 2px solid #E9E9E9;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;

option {
  color : #616Ac5;
}
`

export default Lecture