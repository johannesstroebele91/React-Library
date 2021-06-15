import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// id "overlay" for the portal is specified in the index.html before the "root" div
const portalElement = document.getElementById("overlays");

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
