import React, {useRef} from "react";
import  ReactDOM  from "react-dom";
import styled from "styled-components";

const $root: HTMLElement = document.getElementById("root");



const Modal = ({width, renderContent}) => {
  const $modalRef = useRef<HTMLDivElement>(null);

  return ReactDOM.createPortal(
    <Overlay>
      <ModalStyle width={width} ref={$modalRef}>
        {renderContent()}
      </ModalStyle>
    </Overlay>,
    $root
  );
};

const Overlay = styled.div`
  z-index: 5000;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  top: 0;
  left:0;
`;

const ModalStyle = styled.div<{width:number}>`
  background: #fff;
  border-radius: 3px;
  width: ${props => props.width}px;
  padding: 10px;
`;

export default Modal;
