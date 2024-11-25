import { PropagateLoader } from "react-spinners";

function LoadingModal({ setShow, show }) {
  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <>
          {/* Checkbox to control modal visibility */}
          <input
            type="checkbox"
            id="loading-modal"
            className="modal-toggle"
            checked={show}
            onChange={handleClose}
          />

          {/* Modal structure */}
          <label htmlFor="loading-modal" className="modal cursor-pointer">
            <label
              className="modal-box relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center items-center">
                <PropagateLoader
                  size={13}
                  speedMultiplier={0.8}
                  color="#36d7b7"
                />
              </div>
            </label>
          </label>
        </>
      )}
    </>
  );
}

export default LoadingModal;
