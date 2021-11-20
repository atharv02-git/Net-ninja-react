import React from "react";
import "./Modal.css";

export default function Modal({ children, closeHandlerProp }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={closeHandlerProp}>Close</button>
      </div>
    </div>
  );
}
