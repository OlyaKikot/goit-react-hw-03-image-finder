import s from "./Modal.module.css";
import { ReactComponent as CloseLogo } from "../../icon-close.svg";
import PropTypes from "prop-types";

export default function Modal({ src, onCloseModal, handleOverlay }) {
  return (
    <div className={s.Overlay} onClick={handleOverlay}>
      <div className={s.Modal}>
        <img src={src} alt="" width="1200px" height="800px" />
        <button
          className={s.closeModal}
          type="button"
          onClick={() => onCloseModal()}
        >
          <CloseLogo className={s.CloseLogo} />
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  handleOverlay: PropTypes.func.isRequired,
};