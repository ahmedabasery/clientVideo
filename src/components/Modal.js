import React from "react";
import ReactDom from "react-dom";

const Modal = ({ onDismiss, children }) => {
  return ReactDom.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
