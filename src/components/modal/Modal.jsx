import React from "react";
import styled from "styled-components";


const Modal = (props) => {
  const { closeModal, children } = props;
  // 모달 오버레이에서 스크롤 방지
  React.useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const oncloseModal = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Container>
      <Background onClick={oncloseModal} />
      <ModalBlock>
        <Contents>{children}</Contents>
      </ModalBlock>
    </Container>
  );
};


const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  border-radius: 10px;
  padding: 1.5rem;
  width: 600px;
  min-height: 35rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export default Modal;