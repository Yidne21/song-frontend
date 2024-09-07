import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastProps = {
  children: React.ReactNode;
};

const Toast: React.FC<ToastProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="light"
      />
    </>
  );
};

export default Toast;
