import React from "react";
import cancelLogo from "../../assets/cancelLogo.svg";
import deleteLogo from "../../assets/deleteLogo.svg";

const Modal = ({ isOpen, handleCancel, handleDelete }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="cancel-button-div">
          <img
            style={{ cursor: "pointer" }}
            onClick={handleCancel}
            className="cancel-button"
            src={cancelLogo}
            alt=""
          />
        </div>
        <div className="delete-modal-button-div">
          <img className="delete-modal-button" src={deleteLogo} alt="" />
          <h3>Are you sure?</h3>
          <p style={{ width: "80%", textAlign: "center", fontSize: 16 }}>
            Do you really want to delete this customer? This process can not be
            undone.
          </p>
          <div className="modal-button-wrapper">
            <button
              onClick={handleCancel}
              className="modal-button cancel-modal"
            >
              CANCEL
            </button>
            <button
              onClick={handleDelete}
              className="modal-button delete-modal"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
