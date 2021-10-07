import s from "./Modal.module.css";

export default function Modal({ src, onCloseModal, handleOverlay }) {
  return (
    <div className={s.Overlay} onClick={handleOverlay}>
      <div className={s.Modal}>
        <img src={src} alt="" />
        <button
          className={s.closeModal}
          type="button"
          onClick={() => onCloseModal()}
        >
          X
        </button>
      </div>
    </div>
  );
}
