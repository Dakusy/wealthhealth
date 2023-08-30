import React from "react";

function Modal({ closeModal }) {
    return (
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_show">
                <p>Employee created</p>
                <div className="close_modal">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
