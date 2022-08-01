import React from 'react'
import styled from "styled-components";

const List = (props) => {
    return (
    <React.Fragment>
        <PostWrapper>
        <Title>{props.item.lecture}</Title>
        <Title>{props.item.num}</Title>
        <Title>{props.item.type}</Title>
        <Title>{props.item.name}</Title>
        </PostWrapper>
    </React.Fragment>
  )
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
`;

export default List