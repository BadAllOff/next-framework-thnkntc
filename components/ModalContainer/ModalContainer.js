import React from "react";

const ModalContainer = ({
  modalTitle = `Click 'x' to close this window`,
  closeModal,
  children,
}) => {
  return (
    <div style={styles.overlay}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button
              type="button"
              onClick={() => closeModal()}
              className="close"
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => closeModal()}
              className="btn btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
