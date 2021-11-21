import React from "react";
import "./Modal.css";

export default function Modal({ children, closeHandlerProp }) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border : "4px solid",
        borderColor : "#009fc7"
    }}>
        {children}
        <button onClick={closeHandlerProp}>Close</button>
      </div>
    </div>
  );
}
