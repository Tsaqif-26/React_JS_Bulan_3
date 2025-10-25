import React, { FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [modalRoot] = React.useState(() => {
    const existingRoot = document.getElementById("modal-root")
    if (existingRoot) return existingRoot

    const newRoot = document.createElement("div")
    newRoot.id = "modal-root"
    document.body.appendChild(newRoot)
    return newRoot
  })

  if (!isOpen) return null

  return createPortal(
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          background: "black",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          minWidth: "250px",
        }}
      >
        {children}
        <br />

        <button onClick={onClose}>Tutup</button>
      
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
