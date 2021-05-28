import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
interface BackdropProps {
  onCloseModal: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={() => onCloseModal()} />;
};
interface ModalOverlayProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}
const ModalOverlay: React.FC<ModalOverlayProps> = ({
  title,
  message,
  onCloseModal,
}) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={() => onCloseModal()}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

interface ErrorModalProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  message,
  onCloseModal,
}) => {
  return (
    <>
      {/* Portals enable to transfer DOM elements respectively to id specified (e.g. in the index.html) or somewhere else */}
      {/* 1) Specify element which should be rendered*/}
      {/* 2) Specify id where the component should be rendered */}
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onCloseModal={onCloseModal}
          title={title}
          message={message}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default ErrorModal;
