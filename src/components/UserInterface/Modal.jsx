import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (properties) => {
  return <div className={styles.backdrop} onClick={properties.onClose} />;
};

const Overlay = (properties) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{properties.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (properties) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={properties.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay>{properties.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
