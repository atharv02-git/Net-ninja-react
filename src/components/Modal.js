import React from "react";
import "./Modal.css";

export default function Modal({ children, closeHandlerProp, isSalesModal}) {
  return (
    <div className="modal-backdrop">
      <div className="modal" style={{
        border : "4px solid",
        borderColor : isSalesModal ? "#009fc7" : "#ff0e0e"
    }}>
        {children}
        <button onClick={closeHandlerProp} className={isSalesModal ? "sales-btn" : ""}>Close</button>
      </div>
    </div>
  );
}
