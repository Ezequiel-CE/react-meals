import React from "react";
import { StyledModal, StyledBackdrop } from "./Modal.style";
import ReactDom from "react-dom";

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};

const ModalOverlay = ({ children }) => {
  return (
    <StyledModal>
      <div>{children}</div>
    </StyledModal>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalEl)}
      {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </>
  );
};

export default Modal;
