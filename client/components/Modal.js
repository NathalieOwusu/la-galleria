import React from "react";

const Modal = ({ card, onClose }) => {
   if (!card) return null;
  return(
     <div className="modal-overlay">
    <div className='modal'>
    <button className="close-button" onClick={onClose}>
    &times;
    </button>
    <h2>{card.title}</h2>
        <p>{card.content}</p>
    </div>
    </div>
  )
}
export default Modal