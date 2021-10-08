import s from "./Modal.module.css";
import { ReactComponent as CloseLogo } from "../../icon-close.svg";

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
