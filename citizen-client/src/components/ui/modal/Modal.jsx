import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, title, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal Box */}
      <div
        className={`modal-box relative bg-white rounded-lg shadow-lg ${className} z-50 max-h-[90vh] overflow-y-auto`}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="btn btn-circle btn-sm absolute top-3 right-3"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="">{children}</div>
      </div>
    </div>
  );
};
