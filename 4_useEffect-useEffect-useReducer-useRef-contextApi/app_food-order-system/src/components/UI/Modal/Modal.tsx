import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
  onClose: any;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
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
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({ onClose, ...props }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
