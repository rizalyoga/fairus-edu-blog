import React from "react";

const SuccessToast = ({ message }: { message: string }) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <span className="text-base-100">{message}</span>
      </div>
    </div>
  );
};

export default SuccessToast;
