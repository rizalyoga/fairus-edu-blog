import React from "react";

const ErrorToast = ({ message }: { message: string }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-error">
        <span className="text-base-100">{message}</span>
      </div>
    </div>
  );
};

export default ErrorToast;
