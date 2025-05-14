import React from "react";

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick,
}) => {
  if (!isOpen) return null; // 🔐 Fix: Only show modal when open

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-lg w-[90vw] md:w-[400px] max-h-[90vh] overflow-auto p-6">
        {!hideHeader && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            {showActionBtn && (
              <button onClick={onActionClick} className="btn-small-light">
                {actionBtnIcon} {actionBtnText}
              </button>
            )}
          </div>
        )}

        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
