// components/Toast.tsx
import React, { useState, useEffect } from "react";

interface ToastProps {
  type: string;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  const isSuccess = type === "success";
  const isError = type === "error";
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose();
    }, 3000); // 3 seconds, adjust this value as needed

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      id="toast"
      className={`fixed flex items-center max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 top-4 right-4 w-37 ${
        isSuccess ? "border-green-500" : isError ? "border-red-500" : ""
      }`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${
          isSuccess
            ? "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200"
            : isError
            ? "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200"
            : ""
        } rounded-lg`}
      >
        {isSuccess ? (
          <svg
            className="w-5 h-5 text-meta-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ) : isError ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-exclamation-square-fill text-meta-1"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        ) : null}
        <span className="sr-only">
          {isSuccess ? "Check icon" : "Error icon"}
        </span>
      </div>
      <div
        className={`ml-3 text-sm font-normal ${
          isSuccess
            ? "text-green-500"
            : isError
            ? "text-red-500"
            : "text-meta-3"
        }`}
      >
        {message}
      </div>
      <button
        onClick={handleClose}
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
