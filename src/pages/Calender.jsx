import React from 'react'
import styled from "styled-components"

import Date from "../components/date/Date"

const Calender = () => {
  return (
    <React.Fragment>
      <Box>
        <Date/>
      </Box>
     
   </React.Fragment>
  )
}

const Box = styled.div`
width: 350px;
margin: auto;
padding-top : 30px;
border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;
`



export default Calender