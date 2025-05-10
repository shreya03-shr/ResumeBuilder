import React from 'react';

const Modal = ({
    children,
    isOpen,
    onClose,
    title,
    hideHeader,
    showActionBtn,
    actionBtnIcon = null,
    actionBtnText,
    onActionClick
}) => {
    if (!isOpen) return null;

    return  <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>
            <div className={'relative w-[90%] max-w-md bg-white rounded-lg shadow-lg p-6'}
            >
                {/* Modal Header */}
                {!hideHeader && (
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='text-lg font-medium text-gray-900'>{title}</h3>
                        {showActionBtn && (
                            <button onClick={onActionClick} className='btn-small-light mr-12'>
                                {actionBtnIcon}
                                {actionBtnText}
                            </button>
                        )}
                    </div>
                )}

                {/* Close Button */}
                <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 flex justify-center items-center absolute top-3 right-3'
                    onClick={onClose}
                >
                    <svg
                        className='w-3 h-3'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 14'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 1l6 6m0 6M7 7l6-6M7 7l-6 6'
                        />
                    </svg>
                </button>
                <div className='flex-1 overflow-y-auto custom-scrollbar'>
                    {children}
                </div>
            </div>
        </div>

};

export default Modal;
