import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Spinner from "../components/layout/Spinner";
// import Swal from 'sweetalert2';

const RedirectURI = (props) => {

  const history = useHistory();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)

//   const Toast = Swal.mixin({
//     toast: true,
//     position: 'top',
//     showConfirmButton: false,
//     timer: 1500,
//     color: '#000000',
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
//   })

  if (code) {

    localStorage.setItem("code", code);
    localStorage.setItem("name", "김가경");

    // Toast.fire({
    //   icon: 'success',
    //   title: '로그인 성공!'
    // })
    window.alert("로그인 성공")

    // history.push('/program')
  }

  return (
    <Wrap>
      <Spinner />
    </Wrap>
  )
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`

export default RedirectURI;