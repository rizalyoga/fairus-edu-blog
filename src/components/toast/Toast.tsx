import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message }: { message: string }) => {
  const returnToast = (message: string) => {
    if (message.includes("berhasil") || message.includes("selamat")) {
      return toast.success(message, {
        position: "top-right",
      });
    } else if (message.includes("maaf") || message.includes("Mohon")) {
      return toast.error(message, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    returnToast(message);
  }, [message]);

  return (
    <div>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Toast;
