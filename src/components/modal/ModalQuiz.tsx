import React, { useEffect } from "react";

interface ModalQuizProps {
  isOpen: boolean;
  closeModal: () => void;
  setContinuePlayVideo: () => void;
}

const ModalQuiz = ({
  isOpen,
  closeModal,
  setContinuePlayVideo,
}: ModalQuizProps) => {
  useEffect(() => {
    if (isOpen && document) {
      (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
    } else {
      (document.getElementById("my_modal_1") as HTMLFormElement).close();
    }
  }, [isOpen]);

  const submitHandler = () => {
    closeModal(), setContinuePlayVideo();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
            </form>
            <button onClick={() => submitHandler()} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalQuiz;
