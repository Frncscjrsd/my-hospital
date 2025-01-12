import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
};

export default ModalPortal;