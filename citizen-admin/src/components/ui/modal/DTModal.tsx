// components/DTModal.tsx
"use client";

import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  title?: string;
  children: ReactNode;
}

const DTModal = ({
  children,
  setModalOpen,
  title = "Modal",
  modalOpen,
}: ModalProps) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">{title}</h3>
              <button
                onClick={handleCloseModal}
                className="btn btn-circle btn-sm"
              >
                <FaTimes size={15} />
              </button>
            </div>

            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DTModal;
