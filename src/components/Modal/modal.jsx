import React from "react";
import "./modal.css";
import { motion, AnimatePresence } from "motion/react";

const Modal = ({ isOpen, onClose, title, description, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="inter-bold">{title}</h3>
            <p className="romanesco-regular">{description}</p>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
