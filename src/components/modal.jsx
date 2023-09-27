import React from "react";

import '../css/modal.css';

function Modal({ closeModal }) {
    return (
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_show">
                <p>Votre Employée a été enregistré.</p>
                <div className="close_modal">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
