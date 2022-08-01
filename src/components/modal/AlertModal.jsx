import React from "react";
import styled from "styled-components";

function AlertModal({closeModal}) {
  return (
    <React.Fragment>
      <CloseContainer>
        <LineBox>     
           강의를 삭제하시겠습니까?     
        </LineBox>
        <BottomBox>
          <div className="goBack">      
              <NBtn onClick={closeModal}> 아니오</NBtn>
          </div>
          <YBtn>예</YBtn>
        </BottomBox>
      </CloseContainer>
    </React.Fragment>
  );
}

export default AlertModal;

const CloseContainer = styled.div`
  width: 682px;
  height: 250px;
  padding: 35px 0px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 20px;
  font-family: sans-serif;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 20px 50px;
`;

const BottomBox = styled.div`
  display: flex;
 gap: 10px;
 justify-content: center;
  align-items: center;
  height: 36px;
  margin: auto;
  padding-top: 30px;
`;

const NBtn = styled.div`
cursor: pointer;
width: 236px;
height: 71px;
border: 1px solid #616AC5;
color: #616AC5;
border-radius: 10px;
text-align: center;
font-family: sans-serif;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
`

const YBtn = styled.div`
cursor: pointer;
width: 236px;
height: 71px;
background-color: #616AC5;
color: white;
border-radius: 10px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
`