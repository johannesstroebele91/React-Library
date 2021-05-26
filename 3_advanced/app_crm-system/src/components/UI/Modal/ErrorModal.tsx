import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

interface ErrorModalProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, onCloseModal }) => {

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="button" onClick={() => onCloseModal()}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
